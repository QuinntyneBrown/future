using Chloe.Server.Models.Components;
using System.Collections.Generic;

namespace Chloe.Server.Dtos
{
    public class AppComponentDto
    {
        public AppComponentDto(AppComponent entity)
        {
            this.Id = entity.Id;
            this.Name = entity.Name;
            this.Routes = new HashSet<RouteConfigurationDto>();
            this.Components = new HashSet<ComponentDto>();
        }

        public AppComponentDto()
        {

        }

        public int Id { get; set; }
        public string Name { get; set; }
        public ICollection<RouteConfigurationDto> Routes { get; set; }
        public ICollection<ComponentDto> Components { get; set; }
    }
}