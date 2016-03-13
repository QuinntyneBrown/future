using System.Collections.Generic;

namespace Chloe.Server.Models.Components
{
    public class AppComponent: Component
    {
        public AppComponent()
        {
            this.Routes = new HashSet<RouteConfiguration>();
            this.ComponentType = ComponentType.App;
        }

        public HeaderComponent Header { get; set; }

        public FooterComponent Footer { get; set; }

        public ICollection<RouteConfiguration> Routes { get; set; }
    }
}