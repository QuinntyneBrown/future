using Chloe.Server.Models.Components;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace Chloe.Server.Models
{
    public class Website: BaseEntity
    {
        public Website()
        {
            
        }

        [ForeignKey("AppComponent")]
        public int? AppComponentId { get; set; }

        public AppComponent AppComponent { get; set; }

    }
}