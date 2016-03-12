using System.Collections.Generic;

namespace Chloe.Server.Dtos
{
    public class GalleryAddOrUpdateRequestDto
    {
        public GalleryAddOrUpdateRequestDto()
        {
            this.Photos = new HashSet<PhotoDto>();
            this.MetaData = new HashSet<MetaDataItemDto>();
            this.OpenGraphData = new HashSet<OpenGraphDataItemDto>();
            this.Tags = new HashSet<TagDto>();
        }

        public string Title { get; set; }
        public string Name { get; set; }
        public int? SponsorId { get; set; }
        public string Description { get; set; }
        public ICollection<PhotoDto> Photos { get; set; }
        public ICollection<MetaDataItemDto> MetaData { get; set; }
        public ICollection<OpenGraphDataItemDto> OpenGraphData { get; set; }
        public ICollection<TagDto> Tags { get; set; }
    }
}