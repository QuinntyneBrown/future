﻿using Chloe.Server.Config;
using Chloe.Server.Config.Contracts;
using Chloe.Server.Data;
using Chloe.Server.Data.Contracts;
using Chloe.Server.Services;
using Chloe.Server.Services.Contracts;
using Microsoft.Practices.Unity;

namespace Chloe.Server
{
    public class UnityConfiguration
    {
        public static IUnityContainer GetContainer(bool useMock = false)
        {
            var container = new UnityContainer();
            container.RegisterType<IChloeUow, ChloeUow>();
            container.RegisterType<IDbContext, ChloeContext>();
            container.RegisterType<IRepositoryProvider, RepositoryProvider>();
            container.RegisterType<IBrandService, BrandService>();
            container.RegisterType<IGalleryService, GalleryService>();
            container.RegisterType<IPhotoService, PhotoService>();
            container.RegisterType<IEncryptionService, EncryptionService>();
            container.RegisterType<IIdentityService, IdentityService>();
            container.RegisterType<ICacheProvider, CacheProvider>();
            container.RegisterType<IConfigurationProvider,ConfigurationProvider>();
            container.RegisterType<IAuthorService, AuthorService>();
            container.RegisterType<ITagService, TagService>();
            container.RegisterType<IMetaDataService, MetaDataService>();
            container.RegisterType<IOpenGraphService, OpenGraphService>();
            container.RegisterType<ISponsorService, SponsorService>();
            container.RegisterType<ICustomerService, CustomerService>();
            return container;
        }
    }
}