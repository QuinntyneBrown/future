using Chloe.Server.Models.Components;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Chloe.Server.Dtos
{
    public class RouteConfigurationAddOrUpdateResponseDto: RouteConfigurationDto
    {
        public RouteConfigurationAddOrUpdateResponseDto(RouteConfiguration entity)
            :base(entity)
        {

        }

    }
}