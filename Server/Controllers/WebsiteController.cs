using Chloe.Server.Dtos;
using Chloe.Server.Services.Contracts;
using System.Web.Http;

namespace Chloe.Server.Controllers
{
    [RoutePrefix("api/website")]
    public class WebsiteController : ApiController
    {
        public WebsiteController(IWebsiteService service)
        {
            this.service = service;
        }

        [Route("add")]
        [HttpPost]
        public IHttpActionResult Add(WebsiteAddOrUpdateRequestDto dto) { return Ok(this.service.AddOrUpdate(dto)); }

        [Route("update")]
        [HttpPut]
        public IHttpActionResult Update(WebsiteAddOrUpdateRequestDto dto) { return Ok(this.service.AddOrUpdate(dto)); }

        [AllowAnonymous]
        [Route("get")]
        [HttpGet]
        public IHttpActionResult Get() { return Ok(this.service.Get()); }
        
        [Route("remove")]
        [HttpDelete]
        public IHttpActionResult Remove(int id) { return Ok(this.service.Remove(id)); }
        
        protected readonly IWebsiteService service;
    }
}
