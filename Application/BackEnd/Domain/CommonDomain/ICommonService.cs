﻿using Domain.ViewModel;
using Entity.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Domain.CommonDomain
{
    public interface ICommonService
    {
        Task<List<VehicleCompany>> GetAllcompanies();
    }
}
