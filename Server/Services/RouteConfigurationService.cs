using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using Chloe.Server.Data.Contracts;
using Chloe.Server.Dtos;
using Chloe.Server.Models.Components;
using Chloe.Server.Services.Contracts;


namespace Chloe.Server.Services
{
    public class RouteConfigurationService: IRouteConfigurationService
    {
        public RouteConfigurationService(IChloeUow uow, ICacheProvider cacheProvider)
        {
            this.uow = uow;
            this.repository = uow.RouteConfigurations;
            this.cache = cacheProvider.GetCache();
        }
        
        public RouteConfigurationAddOrUpdateResponseDto AddOrUpdate(RouteConfigurationAddOrUpdateRequestDto request)
        {
            var entity = repository.GetAll()
                .Where(x => x.Name == request.Name && x.IsDeleted == false)
                .FirstOrDefault();
            if (entity == null) repository.Add(entity = new RouteConfiguration());
            entity.Name = request.Name;
            uow.SaveChanges();
            return new RouteConfigurationAddOrUpdateResponseDto(entity);
        }

        public ICollection<RouteConfigurationDto> Get()
        {
            ICollection<RouteConfigurationDto> response = new HashSet<RouteConfigurationDto>();
            repository.GetAll().Where(x => x.IsDeleted == false)
                .ForEachAsync(x => response.Add(new RouteConfigurationDto(x)));                       
            return response;
        }

        public RouteConfigurationDto GetById(int id)
        {
            return new RouteConfigurationDto(repository.GetAll().Where(x => x.Id == id && x.IsDeleted == false).FirstOrDefault());
        }

        public dynamic Remove(int id)
        {
            var entity = repository.GetById(id);
            entity.IsDeleted = true;
            uow.SaveChanges();
            return id;
        }

        protected readonly IChloeUow uow;
        protected readonly IRepository<RouteConfiguration> repository;
        protected readonly ICache cache;
    }
}