using Chloe.Server.Dtos;
using Chloe.Server.Services.Contracts;
using System.Web.Http;

namespace Chloe.Server.Controllers
{
    [Authorize]
    [RoutePrefix("api/gallery")]
    public class GalleryController : ApiController
    {
        public GalleryController(IGalleryService service)
        {
            this.service = service;
        }

        [Route("add")]
        [HttpPost]
        public IHttpActionResult Add(GalleryAddOrUpdateRequestDto dto) { return Ok(this.service.AddOrUpdate(dto)); }

        [Route("update")]
        [HttpPut]
        public IHttpActionResult Update(GalleryAddOrUpdateRequestDto dto) { return Ok(this.service.AddOrUpdate(dto)); }

        [Route("get")]
        [AllowAnonymous]
        [HttpGet]
        public IHttpActionResult Get(GalleryAddOrUpdateRequestDto dto) { return Ok(this.service.GetAll()); }

        [AllowAnonymous]
        [Route("getBySlug")]
        [HttpGet]
        public IHttpActionResult GetBySlug(string slug) { return Ok(this.service.GetBySlug(slug)); }
        
        [Route("remove")]
        [HttpDelete]
        public IHttpActionResult Remove(int id) { return Ok(this.service.Remove(id)); }


        protected readonly IGalleryService service;

    }
}
