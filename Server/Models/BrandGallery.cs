using System.ComponentModel.DataAnnotations.Schema;

namespace Chloe.Server.Models
{
    public class BrandGallery
    {
        public BrandGallery()
        {

        }

        [ForeignKey("Brand")]
        public int BrandId { get; set; }
        [ForeignKey("Gallery")]
        public int GalleryId { get; set; }
        public Brand Brand { get; set; }
        public Gallery Gallery { get; set; }
    }
}