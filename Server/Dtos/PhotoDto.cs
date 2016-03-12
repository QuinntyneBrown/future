using Chloe.Server.Models;
using System;
using System.Collections.Generic;

namespace Chloe.Server.Dtos
{
    public class PhotoDto
    {
        public PhotoDto(Photo entity)
        {
            this.MetaData = new HashSet<MetaDataItemDto>();

            this.Id = entity.Id;
            this.Name = entity.Name;
            this.Slug = entity.Slug;
            this.Url = entity.Url;
        }

        public PhotoDto(GalleryPhoto entity) {

            this.Id = entity.Photo.Id;
            this.Name = entity.Photo.Name;
            this.Slug = entity.Photo.Slug;
            this.Url = entity.Photo.Url;
            this.MetaData = new HashSet<MetaDataItemDto>();
            foreach (var metaData in entity.MetaData) { this.MetaData.Add(new MetaDataItemDto(metaData)); }
        }

        public PhotoDto()
        {
            this.MetaData = new HashSet<MetaDataItemDto>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string Slug { get; set; }
        public DateTime Created { get; set; }
        public DateTime Modified { get; set; }
        public long Size { get; set; }
        public string Url { get; set; }

        public string Description { get; set; }

        public ICollection<MetaDataItemDto> MetaData {get;set;}

    }
}