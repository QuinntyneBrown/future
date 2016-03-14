using System.Collections.Generic;

namespace Chloe.Server.Models
{
    public class Provider: BaseEntity
    {
        public Provider()
        {
            this.Bundles = new HashSet<Bundle>();
        }

        public string WebsiteUrl { get; set; }
        public string PhoneNumber { get; set; }
        ICollection<Bundle> Bundles { get; set; }
    }
}