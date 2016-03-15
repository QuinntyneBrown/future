using System.Collections.Generic;

namespace Chloe.Server.Models.Components
{
    public class AppComponent: Component
    {
        public AppComponent()
        {
            this.Routes = new HashSet<RouteConfiguration>();
            this.Components = new HashSet<Component>();
            this.ComponentType = ComponentType.App;
        }

        public ICollection<Component> Components { get; set; }

        public ICollection<RouteConfiguration> Routes { get; set; }
    }
}