using Chloe.Server.Services.Contracts;

namespace Chloe.Server.Controllers
{
    public class RouteConfigurationController
    {
        public RouteConfigurationController(IComponentService service)
        {
            this.service = service;
        }

        protected readonly IComponentService service;
    }
}