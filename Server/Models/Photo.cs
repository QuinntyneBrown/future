using System;
using System.Collections.Generic;

namespace Chloe.Server.Models
{
    public class Photo: BaseEntity
    {
        public Photo()
        {

        }
        
        public DateTime Created { get; set; }
        public DateTime Modified { get; set; }
        public string Slug { get; set; }
        public long? Size { get; set; }
        public string Url { get; set; }

        public string Title { get; set; }
    }
}