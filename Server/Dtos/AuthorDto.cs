using Chloe.Server.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Chloe.Server.Dtos
{
    public class AuthorDto
    {
        public AuthorDto(Author entity)
        {
            this.Id = entity.Id;
            this.Name = entity.Name;
        }

        public AuthorDto()
        {

        }

        public int Id { get; set; }
        public string Name { get; set; }
    }
}