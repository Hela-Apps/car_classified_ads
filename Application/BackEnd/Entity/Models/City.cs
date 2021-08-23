using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Entity.Models
{
    public class City
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public int DistrictId { get; set; }
        public bool IsActive { get; set; }
    }
}
