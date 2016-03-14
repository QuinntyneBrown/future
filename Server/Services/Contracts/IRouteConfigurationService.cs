using Chloe.Server.Dtos;
using System.Collections.Generic;

namespace Chloe.Server.Services.Contracts
{
    public interface IRouteConfigurationService
    {
        RouteConfigurationAddOrUpdateResponseDto AddOrUpdate(RouteConfigurationAddOrUpdateRequestDto request);
        ICollection<RouteConfigurationDto> Get();
        dynamic Remove(int id);        
        RouteConfigurationDto GetById(int id);
    }
}
