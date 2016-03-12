using System.Collections.Generic;

namespace Chloe.Server.Models
{
    public class Author: BaseEntity
    {
        public Author()
        {
            this.Galleries = new HashSet<Gallery>();
        }

        public ICollection<Gallery> Galleries { get; set; }
    }
}