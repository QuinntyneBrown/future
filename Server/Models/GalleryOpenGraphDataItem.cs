using System.ComponentModel.DataAnnotations.Schema;

namespace Chloe.Server.Models
{
    public class GalleryOpenGraphDataItem: BaseEntity
    {
        public GalleryOpenGraphDataItem()
        {

        }

        public string Content { get; set; }
        [ForeignKey("Gallery")]
        public int GalleryId { get; set; }
        [ForeignKey("OpenGraphDataItem")]
        public int OpenGraphDataItemId { get; set; }
        public Gallery Gallery { get; set; }
        public OpenGraphDataItem OpenGraphDataItem { get; set; }
    }
}