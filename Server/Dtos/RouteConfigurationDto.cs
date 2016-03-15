using Chloe.Server.Models.Components;

namespace Chloe.Server.Dtos
{
    public class RouteConfigurationDto
    {
        public RouteConfigurationDto(RouteConfiguration entity) 
        {
            this.Id = entity.Id;
            this.Name = entity.Name;
            this.Template = entity.Template;
            this.When = entity.When;
            this.IsAuthorizationRequired = entity.IsAuthorizationRequired;
        }

        public RouteConfigurationDto()
        {

        }
        public int Id { get; set; }
        public string Name { get; set; }
        public string When { get; set; }
        public string Template { get; set; }
        public bool? IsAuthorizationRequired { get; set; }
    }
}