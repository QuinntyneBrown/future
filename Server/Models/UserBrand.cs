using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Chloe.Server.Models
{
    public class UserBrand: BaseEntity
    {
        public UserBrand()
        {

        }

        public int UserId { get; set; }
        public int BrandId { get; set; }

        public User User { get; set; }

        public Brand Brand { get; set; }
    }
}