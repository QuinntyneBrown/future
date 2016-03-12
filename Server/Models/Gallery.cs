using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace Chloe.Server.Models
{
    public class Gallery: BaseEntity
    {
        public Gallery()
        {
            this.Photos = new HashSet<GalleryPhoto>();
            this.MetaData = new HashSet<GalleryMetaDataItem>();
            this.OpenGraphData = new HashSet<GalleryOpenGraphDataItem>();
            this.Tags = new HashSet<GalleryTag>();
        }

        public string Title { get; set; }
        public DateTime PublishedDate { get; set; }
        public string Description { get; set; }
        [ForeignKey("Sponsor")]
        public int? SponsorId { get; set; }
        public string Slug { get; set; }
        public string LandingPageUrl { get; set; }

        public string NextGallerySlug { get; set; }
        public Sponsor Sponsor { get; set; }
        public ICollection<GalleryTag> Tags { get; set; }
        public ICollection<GalleryPhoto> Photos { get; set; }
        public ICollection<GalleryMetaDataItem> MetaData { get; set; }
        public ICollection<GalleryOpenGraphDataItem> OpenGraphData { get; set; }
    }
}