using System;
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

        //[HttpPost]
        //[Route("AddCountries")]
        //public async Task<IActionResult> AddCountries(List<string> countryNameList)
        //{
        //    try
        //    {
        //        return Ok(await _commonService.AddCountries(countryNameList));
        //    }
        //    catch (Exception ex)
        //    {
        //        throw ex.InnerException;
        //    }

        //}
    }
}
