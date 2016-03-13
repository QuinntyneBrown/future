using Chloe.Server.Models.Components;

namespace Chloe.Server.Dtos
{
    public class AppComponentDto
    {
        public AppComponentDto(AppComponent entity)
        {

        }

        public string Name { get; set; }
    }
}