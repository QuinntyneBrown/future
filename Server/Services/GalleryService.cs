using Chloe.Server.Services.Contracts;
using System;
using Chloe.Server.Dtos;
using Chloe.Server.Data.Contracts;
using System.Data.Entity;
using System.Linq;
using Chloe.Server.Models;
using System.Collections.Generic;

namespace Chloe.Server.Services
{
    public class GalleryService : IGalleryService
    {
        public GalleryService(IChloeUow uow)
        {
            this.uow = uow;
        }

        public GalleryAddOrUpdateResponseDto AddOrUpdate(GalleryAddOrUpdateRequestDto request)
        {
            var gallery = uow.Galleries.GetAll()
                .Where(x => x.Name == request.Name && x.IsDeleted == false)
                .FirstOrDefault();
            if (gallery == null) uow.Galleries.Add(gallery = new Gallery());
            gallery.PublishedDate = DateTime.Now;
            gallery.Title = request.Title;
            gallery.Name = request.Title;
            gallery.SponsorId = request.SponsorId;
            gallery.Description = request.Description;
            uow.SaveChanges();
            return new GalleryAddOrUpdateResponseDto(gallery);
        }

        public ICollection<GalleryDto> GetAll()
        {
            ICollection<GalleryDto> response = new HashSet<GalleryDto>();

            uow.Galleries.GetAll().Include(x => x.Photos)
                .Where(x => x.IsDeleted == false)
                .ForEachAsync( x => response.Add(new GalleryDto(x))); 
            return response;
        }

        public dynamic Remove(int id)
        {
            var gallery = uow.Galleries.GetById(id);
            gallery.IsDeleted = true;
            uow.SaveChanges();
            return id;
        }

        public GalleryDto GetBySlug(string slug)
        {
            var gallery = uow.Galleries.GetAll()
                .Where(x => x.Slug == slug)
                .Include(x => x.Sponsor)
                .Include(x => x.Photos)
                .Include("Photos.Photo")
                .Include("Photos.MetaData")
                .Single();                    
            return new GalleryDto(gallery);
        }

        protected readonly IChloeUow uow;
    }
}