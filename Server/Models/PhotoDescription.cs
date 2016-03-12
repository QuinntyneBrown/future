using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Chloe.Server.Models
{
    public class PhotoDescription: BaseEntity
    {

        public int PhotoId { get; set; }
        public int DescriptionId { get; set; }
    }
}