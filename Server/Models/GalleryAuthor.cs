using System.ComponentModel.DataAnnotations.Schema;

namespace Chloe.Server.Models
{
    public class GalleryAuthor: BaseEntity
    {
        public GalleryAuthor()
        {

        }

        [ForeignKey("Gallery")]
        public int GalleryId { get; set; }
        [ForeignKey("Author")]
        public int AuthorId { get; set; }
        public Gallery Gallery { get; set; }
        public Author Author { get; set; }
    }
}