using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Chloe.Server.Models.Components
{
    public class LogoComponent: Component
    {
        public LogoComponent()
        {
            this.ComponentType = ComponentType.Logo;
        }
        public string ImageUrl { get; set; }
    }
}