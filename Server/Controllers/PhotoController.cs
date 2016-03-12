using Chloe.Server.Data.Contracts;
using Chloe.Server.Dtos;
using Chloe.Server.Services;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Data.Entity;
using Chloe.Server.Models;

namespace Chloe.Server.Controllers
{
    [Authorize]
    [RoutePrefix("api/photo")]
    public class PhotoController : ApiController
    {
        public PhotoController(IChloeUow uow) { this.uow = uow; }

        [HttpPost]
        [Route("upload")]
        public async Task<IEnumerable<PhotoDto>> Upload(HttpRequestMessage request)
        {
            int galleryId = int.Parse(request.Headers.GetValues("x-galleryId").Single());
            var gallery = new Gallery();
            if(galleryId != 0)
                gallery = uow.Galleries.GetAll()
                .Include(x=>x.Photos)
                .Include("Photos.Photo")
                .Where(x=> x.Id == galleryId).Single();

            string workingFolder = System.Web.HttpContext.Current.Server.MapPath("~/Uploads");
            var provider = new PhotoMultipartFormDataStreamProvider(workingFolder);
            await request.Content.ReadAsMultipartAsync(provider);
            var photos = new List<PhotoDto>();
            foreach (var file in provider.FileData)
            {
                var fileInfo = new FileInfo(file.LocalFileName);
                var photo = new Models.Photo();
                if (uow.Photos.GetAll().Where(x => x.Name == fileInfo.Name).FirstOrDefault() != null)
                {
                    photo = uow.Photos.GetAll().Where(x => x.Name == fileInfo.Name).Single();
                }
                else
                {
                    uow.Photos.Add(photo);
                }
                photo.Name = fileInfo.Name;
                photo.Created = fileInfo.CreationTime;
                photo.Modified = fileInfo.LastWriteTime;
                photo.Size = fileInfo.Length / 1024;

                if (galleryId != 0)
                {
                    if (gallery.Photos.Where(x => x.Photo.Name == photo.Name).FirstOrDefault() == null)
                    {
                        var galleryPhoto = new GalleryPhoto();
                        galleryPhoto.Photo = photo;
                        gallery.Photos.Add(galleryPhoto);
                    }
                } else {
                    if(uow.Photos.GetAll().Where(x => x.Name == photo.Name).FirstOrDefault() == null)
                    {
                        uow.Photos.Add(photo);
                    }
                }

                uow.SaveChanges();
            }
            return photos;
        }


        [HttpGet]
        [Route("get")]
        [AllowAnonymous]
        public IHttpActionResult Get()
        {
            return Ok(this.uow.Photos.GetAll().ToList().Select(x => new PhotoDto(x)));
        }

        protected readonly IChloeUow uow;
    }
}
