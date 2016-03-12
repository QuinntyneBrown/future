using Chloe.Server.Models;

namespace Chloe.Server.Dtos
{
    public class MetaDataItemDto
    {
        public MetaDataItemDto(MetaDataItem entity)
        {
            this.Property = entity.Property;
            this.Content = entity.Content;
        }

        public string Property { get; set; }
        public string Content { get; set; }
    }
}