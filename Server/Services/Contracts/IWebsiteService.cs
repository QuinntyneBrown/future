using Chloe.Server.Dtos;
using System.Collections.Generic;

namespace Chloe.Server.Services.Contracts
{
    public interface IWebsiteService
    {
        WebsiteAddOrUpdateResponseDto AddOrUpdate(WebsiteAddOrUpdateRequestDto request);
        int Remove(int id);
        ICollection<WebsiteDto> Get();
        WebsiteDto GetById(int id);
    }
}