namespace Chloe.Server.Models.Components
{
    public class RouteConfiguration: BaseEntity
    {
        public RouteConfiguration() { }
        public string Template { get; set; }
        public string When { get; set; }
        public bool? IsAuthorizationRequired { get; set; }
    }
}