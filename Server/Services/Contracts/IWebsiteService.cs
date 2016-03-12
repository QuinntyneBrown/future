using Chloe.Server.Dtos;
using System.Collections.Generic;

namespace Chloe.Server.Services.Contracts
{
    public interface IWebsiteService
    {
        WebsiteAddOrUpdateResponseDto AddOrUpdate(WebsiteAddOrUpdateRequestDto dto);
        bool Remove(int id);
        ICollection<WebsiteDto> Get();
    }
}