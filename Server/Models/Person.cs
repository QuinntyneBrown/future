using System.Collections.Generic;

namespace Chloe.Server.Models
{
    public class Person: BaseEntity
    {
        public Person()
        {
            this.ContactInfos = new HashSet<ContactInfo>();
        }
        public string Firstname { get; set; }
        public string Lastname { get; set; }
        public ICollection<ContactInfo> ContactInfos { get; set; } 
    }
}