using Chloe.Server.Models;

namespace Chloe.Server.Dtos
{
    public class DescriptionDto
    {
        public DescriptionDto()
        {
            
        }

        public DescriptionDto(Description entity)
        {
            this.Id = entity.Id;
            this.Name = entity.Name;
            this.Content = entity.Content;
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string Content { get; set; }
    }
}