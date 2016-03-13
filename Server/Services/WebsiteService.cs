using System;
using System.Collections.Generic;
using Chloe.Server.Data.Contracts;
using Chloe.Server.Dtos;
using Chloe.Server.Services.Contracts;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;
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

        
        public WebsiteAddOrUpdateResponseDto AddOrUpdate(WebsiteAddOrUpdateRequestDto dto)
        {
            throw new NotImplementedException();
        }

        public bool Remove(int id)
        {
            throw new NotImplementedException();
        }

        public ICollection<WebsiteDto> Get()
        {
            ICollection<WebsiteDto> response = new HashSet<WebsiteDto>();
            repository.GetAll().Where(x => x.IsDeleted == false)
                .ForEachAsync(x => response.Add(new WebsiteDto(x)));                       
            return response;
        }

        protected readonly IChloeUow uow;
        protected readonly IRepository<Website> repository;
        protected readonly ICache cache;
    }
}