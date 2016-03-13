using Chloe.Server.Dtos;
using System.Collections.Generic;

namespace Chloe.Server.Services.Contracts
{
    public interface IComponentService
    {
        ComponentAddOrUpdateResponseDto AddOrUpdate(ComponentAddOrUpdateRequestDto request);
        ICollection<ComponentDto> GetAll();
        ComponentDto GetBySlug(string slug);
        dynamic Remove(int id);
    }
}
