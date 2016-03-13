using Chloe.Server.Data.Contracts;
using Chloe.Server.Dtos;
using Chloe.Server.Services.Contracts;
using System.Collections.Generic;
using System;

namespace Chloe.Server.Services
{
    public class AppComponentService : IAppComponentService
    {

        public AppComponentService(IChloeUow uow, ICacheProvider cacheProvider)
        {
            this.uow = uow;
            this.cache = cacheProvider.GetCache();
        }

        public ICollection<AppComponentDto> GetAllAppComponents()
        {
            ICollection<AppComponentDto> result = new List<AppComponentDto>();
            return result;
        }

        public AppComponentAddOrUpdateResponseDto AddOrUpdate(AppComponentAddOrUpdateRequestDto request)
        {
            throw new NotImplementedException();
        }

        public ICollection<AppComponentDto> GetAll()
        {
            throw new NotImplementedException();
        }

        public AppComponentDto GetBySlug(string slug)
        {
            throw new NotImplementedException();
        }

        public dynamic Remove(int id)
        {
            throw new NotImplementedException();
        }

        protected readonly IChloeUow uow;
        protected readonly ICache cache;
    }
}