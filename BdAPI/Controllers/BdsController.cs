using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using BdAPI.Models;
using BdAPI.Tools;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BdAPI.Controllers
{
    [EnableCors("allowsAll")]
    [Route("[controller]")]
    [ApiController]
    public class BdsController : ControllerBase
    {

        private IHostingEnvironment _env;

        public BdsController(IHostingEnvironment env)
        {
            _env = env;
        }

        // GET: api/Bds
        [HttpGet]
        public IActionResult Get()
        {
            DataContext db = new DataContext();
            return Ok(db.Bd.ToList());
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            DataContext db = new DataContext();
            return Ok(db.Bd.Include(a => a.Categorie).Include(a => a.Bd_image).FirstOrDefault(a => a.Id == id));
        }

        [HttpPost]
        public IActionResult Post([FromBody] Bd Bd)
        {
            DataContext db = new DataContext();
            db.Bd.Add(Bd);
            db.SaveChanges();
            return Ok(new { BdId = Bd.Id });
        }

        [HttpPut("upload/{id}")]
        public IActionResult Put(int id, [FromForm] ImageType data)
        {
            DataContext db = new DataContext();
            string img = Guid.NewGuid().ToString() + "-" + data.Image.FileName;
            //string pathToUpload = _env.WebRootPath + @"\images\" + random + "-" + imageBd.FileName;
            string pathToUpload = Path.Combine(Path.Combine(Directory.GetCurrentDirectory(), "wwwroot"), "images", img);
            FileStream stream = System.IO.File.Create(pathToUpload);
            data.Image.CopyTo(stream);
            stream.Close();
            Bd bd = new Bd
            {
                Bd_image = "images/" + img,
                Id = id
            };
            db.Bd.Add(bd);
            db.SaveChanges();
            return Ok(new { imageId = bd.Id });
        }
    }

    public class ImageType
    {
        public IFormFile Image { get; set; }
    }
}