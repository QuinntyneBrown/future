using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace Chloe.Server.Models
{
    public class GalleryPhoto: BaseEntity
    {
        public GalleryPhoto()
        {
            this.MetaData = new HashSet<GalleryPhotoMetaDataItem>();
            this.OpenGraphData = new HashSet<GalleryPhotoOpenGraphDataItem>();
            this.MetaData = new HashSet<GalleryPhotoMetaDataItem>();
        }

        [ForeignKey("Gallery")]
        public int GalleryId { get; set; }
        [ForeignKey("Photo")]
        public int PhotoId { get; set; }
        public Gallery Gallery { get; set; }
        public Photo Photo { get; set; }
        public string Slug { get; set; }
        public string Description { get; set; }
        public ICollection<GalleryPhotoMetaDataItem> MetaData { get; set; }
        public ICollection<GalleryPhotoOpenGraphDataItem> OpenGraphData { get; set; }
        public ICollection<GalleryPhotoTag> Tags { get; set; }
    }
}