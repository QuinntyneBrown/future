﻿using Chloe.Server.Data.Contracts;
using Chloe.Server.Models;
using System.Data.Entity;


namespace Chloe.Server.Data
{
    public class ChloeContext: DbContext, IDbContext
    {
        public ChloeContext()
            : base(nameOrConnectionString: "ChloeContext")
        {
            Configuration.ProxyCreationEnabled = false;
            Configuration.LazyLoadingEnabled = false;
            Configuration.AutoDetectChangesEnabled = true;
        }

        public DbSet<Brand> Brands { get; set; }
        public DbSet<Customer> Customer { get; set; }
        public DbSet<Photo> Photos { get; set; }
        public DbSet<Gallery> Galleries { get; set; }
        public DbSet<Tag> Tags { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Role> Roles { get; set; }
        public DbSet<Author> Authors { get; set; }
        public DbSet<Sponsor> Sponsors { get; set; }
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
     
        } 
    }
}
