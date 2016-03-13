using System.Collections.Generic;

namespace Chloe.Server.Models.Components
{
    public class FooterComponent: Component
    {
        public FooterComponent()
        {
            this.LinkLists = new HashSet<LinkListComponent>();
            this.ComponentType = ComponentType.Footer;
        }

        public ICollection<LinkListComponent> LinkLists { get; set; }
    }
}