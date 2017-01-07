using System.Net.NetworkInformation;
using Microsoft.AspNetCore.Mvc;
using peoplesearch.Models;
using peoplesearch.Models.Persistance;

namespace peoplesearch.Controllers.Api
{
    [Route("api/[controller]")]
    [Produces("application/json")]
    public class PeopleController : Controller
    {

        public PeopleController(IPeopleRepository PeopleRepo) 
        {
            People = PeopleRepo;
        }

        public IPeopleRepository People { get; set; }

        [HttpGet]
        [Produces(typeof(Person[]))]
        public IActionResult Get()
        {
            return Ok(People.GetAll());
        }

        [HttpGet("{id}", Name = "GetPerson")]
        public IActionResult GetById(string id)
        {
            var item = People.Find(id);
            if (item == null)
            {
                return NotFound();
            }
            return new ObjectResult(item);
        }

        [HttpPost]
        [Route("add")]
        public IActionResult AddPerson([FromBody] Person p)
        {
            People.Add(p);
            return Ok();
        }
    }
}
