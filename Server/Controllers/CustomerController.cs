using Chloe.Server.Services.Contracts;
using System.Web.Http;

namespace Chloe.Server.Controllers
{
    public class CustomerController : ApiController
    {
        public CustomerController(ICustomerService service)
        {
            this.service = service;
        }

        protected readonly ICustomerService service;
    }
}
