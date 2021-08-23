using Entity.Models;
using Microsoft.EntityFrameworkCore;
using SmartERP.Domain.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace EntityLibrary.Context
{
    public class SmartERPDbContext : DbContext
    {
        public SmartERPDbContext(DbContextOptions<SmartERPDbContext> options) : base(options)
        { }

        public DbSet<District> District { get; set; }
        public DbSet<City> City { get; set; }
        public DbSet<VehicleCategory> VehicleCategory { get; set; }
        public DbSet<VehicleCondition> VehicleCondition { get; set; }
        public DbSet<PriceRange> PriceRange { get; set; }
        public DbSet<VehicleCompany> VehicleCompany { get; set; }
        public DbSet<AdsCategory> AdsCategory { get; set; }

    }
}
