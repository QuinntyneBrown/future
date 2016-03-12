using Chloe.Server.Dtos;
using System.Collections.Generic;

namespace Chloe.Server.Services.Contracts
{
    public interface IBrandService
    {
        BrandAddOrUpdateResponseDto Add(BrandAddOrUpdateRequestDto dto);
        bool Remove(int id);
        ICollection<BrandDto> Get();
    }
}
