using Chloe.Server.Models;

namespace Chloe.Server.Dtos
{
    public class SponsorDto
    {
        public SponsorDto(Sponsor entity)
        {
            this.Id = entity.Id;
            this.Name = entity.Name;
            this.LogoUrl = entity.LogoUrl;
        }

        public SponsorDto()
        {

        }
        public int Id { get; set; }
        public string Name { get; set; }
        public string LogoUrl { get; set; }
    }
}