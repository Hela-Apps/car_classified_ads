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

       // public DbSet<Book> Books { get; set; }
        //public DbSet<Catalogue> Catalogues { get; set; }
       // public DbSet<Department> Department { get; set; }
        public DbSet<District> District { get; set; }

    }
}
