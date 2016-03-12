using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Chloe.Server.Models
{
    public class GalleryTag: BaseEntity
    {
        public int GalleryId { get; set; }
        public int TagId { get; set; }
    }
}