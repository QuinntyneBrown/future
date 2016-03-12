using System.ComponentModel.DataAnnotations.Schema;

namespace Chloe.Server.Models
{
    public class GalleryMetaDataItem: BaseEntity
    {
        public GalleryMetaDataItem()
        {

        }
        public string Content { get; set; }
        [ForeignKey("Gallery")]
        public int GalleryId { get; set; }
        [ForeignKey("MetaDataItem")]
        public int MetaDataItemId { get; set; }
        public Gallery Gallery { get; set; }
        public MetaDataItem MetaDataItem { get; set; }
    }
}