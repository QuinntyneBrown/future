using Chloe.Server.Data;
using Chloe.Server.Models;
using System.Linq;
using System.Data.Entity.Migrations;
using System.IO;
using System;

namespace Chloe.Migrations
{
    public class PhotoConfiguration
    {
        public static void Seed(ChloeContext context)
        {
            if (context.Photos.ToList().Count < 6)
            {

                context.Photos.Add(CreatePhoto("loveland-one.jpg","Loveland One"));
                context.Photos.Add(CreatePhoto("loveland-two.jpg", "Loveland Two"));
                context.Photos.Add(CreatePhoto("loveland-three.jpg", "Loveland Three"));
                context.Photos.Add(CreatePhoto("tree-stump-coffee-table.jpg", "Coffee Table"));
                context.Photos.Add(CreatePhoto("tree-stump-planters.jpg", "Planters"));
                context.Photos.Add(CreatePhoto("tree-stump-wine-rack.jpg", "Wine Rack"));

                context.SaveChanges();
            }            
        }

        public static Photo CreatePhoto(string filename, string title = null)
        {
            return new Photo()
            {
                Name = filename,
                Title = title,
                Slug = Path.GetFileNameWithoutExtension(filename),                
                Created = DateTime.Now,
                Modified = DateTime.Now,
                Size = 0,
                Url = string.Format(@"http://localhost:61891/uploads/{0}", filename)
            };
        }
    }
}