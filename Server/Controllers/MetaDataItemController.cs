using System.Web.Http;

namespace Chloe.Server.Controllers
{
    [Authorize]
    [RoutePrefix("api/metadataitem")]
    public class MetaDataItemController : ApiController
    {
    }
}
