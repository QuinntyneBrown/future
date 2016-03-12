namespace Chloe.Server.Models
{
    public class MetaDataItem: BaseEntity
    {
        public MetaDataItem()
        {

        }

        public string Property { get; set; }
        public string Content { get; set; }
    }
}