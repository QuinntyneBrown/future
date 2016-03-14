using System;
using System.Collections.Generic;
using Chloe.Server.Data.Contracts;
using Chloe.Server.Dtos;
using Chloe.Server.Services.Contracts;
using System.Data.Entity;
using System.Linq;
using Chloe.Server.Models;

namespace Chloe.Server.Services
{
    public class WebsiteService: IWebsiteService
    {
        public WebsiteService(IChloeUow uow, ICacheProvider cacheProvider)
        {
            this.uow = uow;
            this.repository = uow.Websites;
            this.cache = cacheProvider.GetCache();
        }
        
        public WebsiteAddOrUpdateResponseDto AddOrUpdate(WebsiteAddOrUpdateRequestDto request)
        {
            var entity = repository.GetAll()
                .Where(x => x.Name == request.Name && x.IsDeleted == false)
                .FirstOrDefault();
            if (entity == null) repository.Add(entity = new Website());
            entity.Name = request.Name;
            uow.SaveChanges();
            return new WebsiteAddOrUpdateResponseDto(entity);
        }

        public int Remove(int id)
        {
            var entity = repository.GetById(id);
            entity.IsDeleted = true;
            uow.SaveChanges();
            return id;
        }

        public ICollection<WebsiteDto> Get()
        {
            ICollection<WebsiteDto> response = new HashSet<WebsiteDto>();
            repository.GetAll().Where(x => x.IsDeleted == false)
                .ForEachAsync(x => response.Add(new WebsiteDto(x)));                       
            return response;
        }

        public WebsiteDto GetById(int id)
        {
            return new WebsiteDto(repository.GetAll().Where(x => x.Id == id && x.IsDeleted == false).FirstOrDefault());
        }

        protected readonly IChloeUow uow;
        protected readonly IRepository<Website> repository;
        protected readonly ICache cache;
    }
}