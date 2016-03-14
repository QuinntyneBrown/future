using Chloe.Server.Dtos;
using Chloe.Server.Services.Contracts;
using System.Web.Http;

namespace Chloe.Server.Controllers
{
    [Authorize]
    [RoutePrefix("api/routeConfiguration")]
    public class RouteConfigurationController : ApiController
    {
        public RouteConfigurationController(IRouteConfigurationService service)
        {
            this.service = service;
        }

        [Route("add")]
        [HttpPost]
        public IHttpActionResult Add(RouteConfigurationAddOrUpdateRequestDto dto) { return Ok(this.service.AddOrUpdate(dto)); }

        [Route("update")]
        [HttpPut]
        public IHttpActionResult Update(RouteConfigurationAddOrUpdateRequestDto dto) { return Ok(this.service.AddOrUpdate(dto)); }
        
        [Route("get")]
        [HttpGet]
        public IHttpActionResult Get() { return Ok(this.service.Get()); }

        [Route("getById")]
        [HttpGet]
        public IHttpActionResult GetById(int id) { return Ok(this.service.GetById(id)); }

        [Route("remove")]
        [HttpDelete]
        public IHttpActionResult Remove(int id) { return Ok(this.service.Remove(id)); }
        
        protected readonly IRouteConfigurationService service;
    }
}
