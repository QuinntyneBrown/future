using System.ComponentModel.DataAnnotations.Schema;

namespace Chloe.Server.Models
{
    public class CustomerGallery: BaseEntity
    {
        public CustomerGallery()
        {

        }
        [ForeignKey("Customer")]
        public int CustomerId { get; set; }
        [ForeignKey("Gallery")]
        public int GalleryId { get; set; }
        public Customer Customer { get; set; }
        public Gallery Gallery { get; set; }
    }
}