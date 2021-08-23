using AutoMapper;
using Domain.ViewModel;
using Entity.Models;
using Newtonsoft.Json;
using Repository.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Domain.CommonDomain
{
    public class CommonService:Profile,ICommonService
    {
        private readonly IDistrictRepository _countryRepository;
        public CommonService(IDistrictRepository countryRepository)
        {
            _countryRepository = countryRepository;
        }

        //public async Task<List<int>> AddCountries(List<string> countryNameList)
        //{
        //    var countryIdList = new List<int>();
        //    foreach (var item in countryNameList)
        //    {
        //        var countryVM = new CountryViewModel();
        //        var country = new District();
        //        countryVM.CountryName = item;
        //        countryVM.IsActive = true;

        //        country = JsonConvert.DeserializeObject<District>(JsonConvert.SerializeObject(countryVM));
        //        var id = await _countryRepository.Add(country);
        //        countryIdList.Add(id);
        //    }
        //    return countryIdList;

        //}
    }
}
