﻿using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;

namespace WebAPI.Controllers
{

    [ApiController]
    [Produces("application/json")]
    [Authorize]
    [Route("api/[controller]")]
    public class ApiController : ControllerBase
    {
        private IMapper _mapper;
        protected IMapper Mapper => _mapper ??= HttpContext.RequestServices.GetService<IMapper>();
    }
}
