using Chloe.Server.Dtos;
using System.Collections.Generic;

namespace Chloe.Server.Services.Contracts
{
    public interface IGalleryService
    {
        GalleryAddOrUpdateResponseDto AddOrUpdate(GalleryAddOrUpdateRequestDto request);
        ICollection<GalleryDto> GetAll();
        GalleryDto GetBySlug(string slug);
        dynamic Remove(int id);
    }
}
