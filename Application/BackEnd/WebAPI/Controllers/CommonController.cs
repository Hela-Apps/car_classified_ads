﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain.CommonDomain;
using Domain.ViewModel;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CommonController : ControllerBase
    {
        private readonly ICommonService _commonService;
        public CommonController(ICommonService commonService)
        {
            _commonService = commonService;
        }

        [HttpGet]
        [Route("GetAllCompanies")]
        public async Task<IActionResult> GetAllCompanies()
        {
            try
            {
                return Ok(await _commonService.GetAllcompanies());
            }
            catch (Exception ex)
            {
                throw ex.InnerException;
            }

        }

        [HttpGet]
        [Route("GetAllCategories")]
        public async Task<IActionResult> GetAllCategories()
        {
            try
            {
                return Ok(await _commonService.GetAllCategories());
            }
            catch (Exception ex)
            {
                throw ex.InnerException;
            }

        }

        [HttpGet]
        [Route("GetAllConditions")]
        public async Task<IActionResult> GetAllConditions()
        {
            try
            {
                return Ok(await _commonService.GetAllConditions());
            }
            catch (Exception ex)
            {
                throw ex.InnerException;
            }

        }
    }
}
