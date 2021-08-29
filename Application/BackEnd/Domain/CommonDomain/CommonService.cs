using AutoMapper;
using Domain.ViewModel;
using Entity.Models;
using Newtonsoft.Json;
using Repository.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.CommonDomain
{
    public class CommonService:Profile,ICommonService
    {
        private readonly ICompanyRepository _companyRepository;
        public CommonService(ICompanyRepository companyRepository)
        {
            _companyRepository = companyRepository;
        }

        public async Task<IEnumerable<VehicleCompany>> GetAllcompanies()
        {
            return await _companyRepository.GetAll();
        }
    }
}
