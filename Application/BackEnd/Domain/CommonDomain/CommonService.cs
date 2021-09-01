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
        private readonly IVehicleCompanyRepository _companyRepository;
        private readonly IVehicleCategoryRepository _categoryRepository;
        private readonly IVehicleConditionRepository _conditionRepository;
        public CommonService(IVehicleCompanyRepository companyRepository, 
            IVehicleCategoryRepository categoryRepository,
            IVehicleConditionRepository conditionRepository)
        {
            _companyRepository = companyRepository;
            _categoryRepository = categoryRepository;
            _conditionRepository = conditionRepository;
        }

        public async Task<IEnumerable<VehicleCompany>> GetAllcompanies()
        {
            var companies = await _companyRepository.GetAll();
           return companies.Where(x => x.IsActive == true);
        }

        public async Task<IEnumerable<VehicleCategory>> GetAllCategories()
        {
            var categories = await _categoryRepository.GetAll();
            return categories.Where(x => x.IsActive == true);
        }

        public async Task<IEnumerable<VehicleCondition>> GetAllConditions()
        {
            var conditions = await _conditionRepository.GetAll();
            return conditions.Where(x => x.IsActive == true);
        }
    }
}
