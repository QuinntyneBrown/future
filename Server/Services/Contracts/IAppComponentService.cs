using Chloe.Server.Dtos;
using System.Collections.Generic;

namespace Chloe.Server.Services.Contracts
{
    public interface IAppComponentService
    {
        AppComponentAddOrUpdateResponseDto AddOrUpdate(AppComponentAddOrUpdateRequestDto request);
        ICollection<AppComponentDto> GetAll();
        dynamic Remove(int id);
        AppComponentDto GetById(int id);
    }
}
