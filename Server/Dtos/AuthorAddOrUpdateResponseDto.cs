using Chloe.Server.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Chloe.Server.Dtos
{
    public class AuthorAddOrUpdateResponseDto : AuthorDto
    {
        public AuthorAddOrUpdateResponseDto(Author entity)
            :base(entity)
        {

        }
    }
}