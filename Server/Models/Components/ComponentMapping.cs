using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Chloe.Server.Models.Components
{
    public class ComponentMapping: BaseEntity
    {
        Component ParentComponent { get; set; }

        ICollection<Component> Children { get; set; }
    }
}