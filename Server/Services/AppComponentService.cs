using Chloe.Server.Data.Contracts;
using Chloe.Server.Dtos;
using Chloe.Server.Services.Contracts;
using System.Collections.Generic;
using System;
using System.Data;
using System.Data.Entity;
using System.Linq;
using Chloe.Server.Models.Components;

namespace Chloe.Server.Services
{
    public class AppComponentService : IAppComponentService
    {

        public AppComponentService(IChloeUow uow, ICacheProvider cacheProvider)
        {
            this.uow = uow;
            this.cache = cacheProvider.GetCache();
            this.repository = uow.AppComponents;
        }

        public ICollection<AppComponentDto> GetAllAppComponents()
        {
            ICollection<AppComponentDto> result = new List<AppComponentDto>();
            return result;
        }

        public AppComponentAddOrUpdateResponseDto AddOrUpdate(AppComponentAddOrUpdateRequestDto request)
        {
            var entity = repository.GetAll()
                .Where(x => x.Id == request.Id && x.IsDeleted == false)
                .Include(x=>x.Routes)
                .Include(x=>x.Components)
                .FirstOrDefault();
            if (entity == null) repository.Add(entity = new AppComponent());
            entity.Name = request.Name;
            uow.SaveChanges();
            return new AppComponentAddOrUpdateResponseDto(entity);
        }

        public ICollection<AppComponentDto> GetAll()
        {
            ICollection<AppComponentDto> response = new HashSet<AppComponentDto>();
            repository.GetAll().Where(x => x.IsDeleted == false)
                .Include(x=>x.Routes)
                .Include(x=>x.Components)
                .ForEachAsync(x => response.Add(new AppComponentDto(x)));
            return response;
        }

        public dynamic Remove(int id)
        {
            var entity = repository.GetById(id);
            entity.IsDeleted = true;
            uow.SaveChanges();
            return id;
        }

        public AppComponentDto GetById(int id)
        {
            return new AppComponentDto(repository.GetAll().Where(x => x.Id == id)
                .Include(x => x.Routes)
                .Include(x => x.Components)
                .Single());
        }

        protected readonly IChloeUow uow;
        protected readonly ICache cache;
        protected readonly IRepository<AppComponent> repository;
    }
}