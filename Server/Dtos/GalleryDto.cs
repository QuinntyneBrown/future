using Chloe.Server.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Chloe.Server.Dtos
{
    public class GalleryDto
    {
        public GalleryDto(Gallery model)
        {
            this.Photos = new HashSet<PhotoDto>();


            this.Id = model.Id;
            this.LandingPageUrl = model.LandingPageUrl;
            this.Name = model.Name;            
            this.GalleryPhotosCount = model.Photos.Count;
            this.PublishedDate = model.PublishedDate.ToShortDateString();
            this.NextGallerySlug = model.NextGallerySlug;
            if(model.Sponsor !=null) { this.SponsorLogoUrl = model.Sponsor.LogoUrl; }

            foreach(var photo in model.Photos) { this.Photos.Add(new PhotoDto(photo)); }
            
        }

        public GalleryDto()
        {

        }

        public int Id { get; set; }
        public string Name { get; set; }
        public int GalleryPhotosCount { get; set; }
        public string SponsorLogoUrl { get; set; }
        public string PublishedDate { get; set; }
        public ICollection<PhotoDto> Photos { get; set; }
        public string NextGallerySlug { get; set; }

        public string LandingPageUrl { get; set; }
    }
}