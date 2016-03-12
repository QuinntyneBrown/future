using System;
using System.Collections.Generic;
using System.Linq;
using Chloe.Server.Data.Contracts;
using Chloe.Server.Dtos;
using Chloe.Server.Services.Contracts;
using Chloe.Server.Models;

namespace Chloe.Server.Services
{
    public class AuthorService: IAuthorService
    {
        public AuthorService(IChloeUow uow)
        {
            this.uow = uow;
            this.repository = uow.Authors;
        }

        public AuthorAddOrUpdateResponseDto AddOrUpdate(AuthorAddOrUpdateRequestDto request)
        {
            var entity = repository.GetAll()
                .Where(x => x.Id == request.Id && x.IsDeleted == false)
                .FirstOrDefault();
            if (entity == null) repository.Add(entity = new Author());
            entity.Name = request.Name;
            uow.SaveChanges();
            return new AuthorAddOrUpdateResponseDto(entity);
        }

        public ICollection<AuthorDto> GetAll()
        {
            ICollection<AuthorDto> response = new HashSet<AuthorDto>();
            foreach (var entity in repository.GetAll().Where(x => x.IsDeleted == false))
            {
                response.Add(new AuthorDto(entity));
            }
            return response;
        }

        public dynamic Remove(int id)
        {
            var entity = repository.GetById(id);
            entity.IsDeleted = true;
            uow.SaveChanges();
            return id;
        }

        public AuthorDto GetById(int id)
        {
            var entity = repository.GetAll().Where(x => x.Id == id).Single();
            return new AuthorDto(entity);
        }

        protected readonly IChloeUow uow;
        protected readonly IRepository<Author> repository;

    }
}