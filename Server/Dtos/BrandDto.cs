using Chloe.Server.Models;
using System.Collections.Generic;
using System.Linq;

namespace Chloe.Server.Dtos
{
    public class BrandDto
    {
        public BrandDto(Brand entity) {
            this.Id = entity.Id;
            this.Name = entity.Name;
        }

        public BrandDto()
        {

        }

        public int Id { get; set; }
        public string Name { get; set; }    
    }
}
