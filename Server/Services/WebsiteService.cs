using System;
using System.Collections.Generic;
using Chloe.Server.Data.Contracts;
using Chloe.Server.Dtos;
using Chloe.Server.Services.Contracts;

namespace Chloe.Server.Services
{
    public class WebsiteService: IWebsiteService
    {
        public WebsiteService(IChloeUow uow)
        {
            this.uow = uow;
        }

        protected readonly IChloeUow uow;

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
            throw new NotImplementedException();
        }
    }
}