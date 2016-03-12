using Chloe.Server.Dtos;
using System.Collections.Generic;

namespace Chloe.Server.Services.Contracts
{
    public interface IAuthorService
    {
        AuthorAddOrUpdateResponseDto AddOrUpdate(AuthorAddOrUpdateRequestDto request);
        ICollection<AuthorDto> GetAll();
        AuthorDto GetById(int id);
        dynamic Remove(int id);
    }
}
