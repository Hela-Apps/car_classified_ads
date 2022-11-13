﻿using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using SmartERP.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using Entity.Context;
using Entity.Models;
using WebAPI.Controllers;
using Microsoft.AspNetCore.Authorization;
using Entity.ViewModel;

namespace SmartERP.API.Controllers
{
    [Route("api/applicationUsers")]
    [ApiController]
    public class ApplicationUserController : ApiController
    {
        private UserManager<ApplicationUser> _userManager;
        private SignInManager<ApplicationUser> _signInManager;
        private AthenticationContext _AthenticationContext;
        private IOptions<ApplicationSettings> _appSettings;

        public ApplicationUserController(UserManager<ApplicationUser> userManager, SignInManager<ApplicationUser> signInManager, AthenticationContext athenticationContext, IOptions<ApplicationSettings> appSettings)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _AthenticationContext = athenticationContext;
            _appSettings = appSettings;
        }
        [AllowAnonymous]
        [HttpPost]
        [Route("Register")]
        //POST : /api/ApplicationUsers/Register
        public async Task<Object> PostApplicationUser(ApplicationUserViewModel userModel)
        {           
            try
            {
                var applicationUser = Mapper.Map<ApplicationUser>(userModel);
                var result = await _userManager.CreateAsync(applicationUser, userModel.Password);
                return Ok(result);
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }

        [HttpPost]
        [Route("Login")]
        //POST:/api/ApplicationUser/Login
        public async Task<IActionResult> Login(LoginViewModel model)
        {
            var user = await _userManager.FindByNameAsync(model.UserName);
            if (user != null && await _userManager.CheckPasswordAsync(user, model.Password))
            {
                var tokenDescriptor = new SecurityTokenDescriptor
                {
                    Subject = new ClaimsIdentity(new Claim[]
                    {
                        new Claim("UserID", user.Id.ToString())
                    }),
                    Expires = DateTime.UtcNow.AddDays(1),
                    SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_appSettings.Value.JWT_Secret)), SecurityAlgorithms.HmacSha256Signature)
                };
                var tokenHandler = new JwtSecurityTokenHandler();
                var securityToken = tokenHandler.CreateToken(tokenDescriptor);
                var token = tokenHandler.WriteToken(securityToken);
                return Ok(new { token });
            }
            else
            {
                return BadRequest(new { message = "UserName or Passwords is incorrect" });
            }
        }
    }
}
