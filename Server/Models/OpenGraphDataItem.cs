namespace Chloe.Server.Models
{
    public class OpenGraphDataItem: BaseEntity
    {
        public OpenGraphDataItem()
        {

        }
        public string Property { get; set; }
        public string Content { get; set; }
    }
}