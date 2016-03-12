using Chloe.Server.Models;

namespace Chloe.Server.Data.Contracts
{
    public interface IChloeUow
    {
        IRepository<Author> Authors { get; }
        IRepository<Brand> Brands { get; }
        IRepository<Customer> Customers { get; }
        IRepository<Photo> Photos { get; }
        IRepository<User> Users { get; }
        IRepository<Gallery> Galleries { get; }
        IRepository<Tag> Tags { get; }
        IRepository<Website> Websites { get; }
        void SaveChanges();
    }
}
