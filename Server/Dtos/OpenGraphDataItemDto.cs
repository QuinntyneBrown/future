using Chloe.Server.Models;

namespace Chloe.Server.Dtos
{
    public class OpenGraphDataItemDto
    {
        public OpenGraphDataItemDto(OpenGraphDataItem entity)
        {
            this.Property = entity.Property;
            this.Content = entity.Content;
        }

        public string Property { get; set; }
        public string Content { get; set; }
    }
}