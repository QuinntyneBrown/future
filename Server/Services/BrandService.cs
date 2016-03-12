using System.Data.Entity;
using System.Collections.Generic;
using Chloe.Server.Dtos;
using Chloe.Server.Services.Contracts;
using Chloe.Server.Data.Contracts;
using System.Linq;
using Chloe.Server.Models;

namespace Chloe.Server.Services
{
    public class BrandService : IBrandService
    {
        public BrandService(IChloeUow uow)
        {
            this.uow = uow;
        }

        public BrandAddOrUpdateResponseDto Add(BrandAddOrUpdateRequestDto dto)
        {
            var brand = new Brand();

            if (dto.Id != 0)
            {
                brand = uow.Brands.GetAll().Where(x => x.Id == dto.Id)          
                    .Single();
                brand.Name = dto.Name;

            } else
            {
                brand = new Brand() { Name = dto.Name };
                this.uow.Brands.Add(brand);
            }
                

            this.uow.SaveChanges();
            return new BrandAddOrUpdateResponseDto(brand);
        }

        public ICollection<BrandDto> Get()
        {
            return this.uow.Brands
                .GetAll()
                .Where(x => x.IsDeleted == false)
                .ToList()
                .Select(x => new BrandDto(x)).ToList();
        }

        public bool Remove(int id)
        {
            var entity = uow.Brands.GetById(id);
            entity.IsDeleted = true;
            uow.SaveChanges();
            return true;
        }

        protected readonly IChloeUow uow;
    }
}
