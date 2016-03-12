using Chloe.Server.Dtos;
using Chloe.Server.Services.Contracts;
using System.Web.Http;

namespace Chloe.Server.Controllers
{
    [Authorize]
    [RoutePrefix("api/author")]
    public class AuthorController : ApiController
    {

        public AuthorController(IAuthorService service)
        {
            this.service = service;
        }

        [Route("add")]
        [HttpPost]
        public IHttpActionResult Add(AuthorAddOrUpdateRequestDto dto) { return Ok(this.service.AddOrUpdate(dto)); }

        [Route("update")]
        [HttpPut]
        public IHttpActionResult Update(AuthorAddOrUpdateRequestDto dto) { return Ok(this.service.AddOrUpdate(dto)); }

        [AllowAnonymous]
        [Route("get")]
        [HttpGet]
        public IHttpActionResult Get() { return Ok(this.service.GetAll()); }

        [Route("remove")]
        [HttpDelete]
        public IHttpActionResult Remove(int id) { return Ok(this.service.Remove(id)); }

        [AllowAnonymous]
        [Route("getById")]
        [HttpGet]
        public IHttpActionResult GetById(int id) { return Ok(this.service.GetById(id)); }

        protected readonly IAuthorService service;
    }
}
