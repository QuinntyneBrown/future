namespace Chloe.Server.Models
{
    public class ContactInfo: BaseEntity
    {
        public ContactInfoType ContactInfoType { get; set; }
        public virtual string Value { get; set; }
    }
}