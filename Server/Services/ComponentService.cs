﻿using Chloe.Server.Data.Contracts;
using Chloe.Server.Dtos;
using Chloe.Server.Services.Contracts;
using System.Collections.Generic;
using System;

namespace Chloe.Server.Services
{
    public class ComponentService: IComponentService
    {
        public ComponentService(IChloeUow uow, ICacheProvider cacheProvider)
        {
            this.uow = uow;
            this.cache = cacheProvider.GetCache();
        }

        public ICollection<ComponentDto> GetAllComponents()
        {
            ICollection<ComponentDto> result = new List<ComponentDto>();
            return result;
        }

        public ComponentAddOrUpdateResponseDto AddOrUpdate(ComponentAddOrUpdateRequestDto request)
        {
            throw new NotImplementedException();
        }

        public ICollection<ComponentDto> GetAll()
        {
            throw new NotImplementedException();
        }

        public ComponentDto GetBySlug(string slug)
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