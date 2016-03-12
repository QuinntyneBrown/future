using Chloe.Server.Models;

namespace Chloe.Server.Dtos
{
    public class WebsiteDto
    {
        public WebsiteDto(Website entity)
        {
            this.Id = entity.Id;
            this.Name = entity.Name;
        }

        public WebsiteDto()
        {

        }

        public int Id { get; set; }
        public string Name { get; set; }
    }

    public class WebsiteAddOrUpdateResponseDto : WebsiteDto
    {
        public WebsiteAddOrUpdateResponseDto(Website entity)
            : base(entity)
        {

        }
    }

    public class WebsiteAddOrUpdateRequestDto : WebsiteDto
    {
    }
}