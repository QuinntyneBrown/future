using Chloe.Server.Models;
using Chloe.Server.Models.Components;

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
        IRepository<RouteConfiguration> RouteConfigurations { get; }
        IRepository<AppComponent> AppComponents { get; }

        void SaveChanges();
    }
}
