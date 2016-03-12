using Chloe.Server.Data;
using Chloe.Server.Models;
using System.Linq;
using System.Data.Entity.Migrations;
using System;

namespace Chloe.Migrations
{
    public class GalleryConfiguration
    {
        public static void Seed(ChloeContext context)
        {
            if (context.Galleries.FirstOrDefault(x => x.Title == "Timber Kings") == null)
            {
                var gallery = new Gallery();
                gallery.Name = "Timber Kings";
                gallery.Slug = "timber-kings";
                gallery.NextGallerySlug = "loveland";
                gallery.LandingPageUrl = "timber-kings-detail.html";
                gallery.Sponsor = new Sponsor() { LogoUrl = "sponsor-logo.jpg" };
                gallery.PublishedDate = DateTime.Now;
                gallery.Photos.Add(CreateGalleryPhoto(context, "tree-stump-coffee-table.jpg", "<div>A sliced section of a once-soaring cedar—complete with caster wheels—provides not only a serious conversation piece but also a place where serious (or silly, depending on the mood) conversations can take place. </div>"));
                gallery.Photos.Add(CreateGalleryPhoto(context, "tree-stump-planters.jpg", "<div>Reusing old flora to grow new flora would make our kindergarten teacher—with her “Reduce, Reuse and Recycle” lesson—very proud. </div>"));
                gallery.Photos.Add(CreateGalleryPhoto(context, "tree-stump-wine-rack.jpg", "<div>Squirrels keep their winter cache of nuts in trees, so why can’t we keep our winter stash of wine in a tree too? This is Nature at its finest, people. </div>"));
                gallery.Description = @"<div>These ingenious ideas prove tree trunks are the best.</div>";
                context.Galleries.Add(gallery);
                context.SaveChanges();
            }

            if (context.Galleries.FirstOrDefault(x => x.Title == "Loveland") == null)
            {
                var gallery = new Gallery();
                gallery.Name = "Loveland";
                gallery.Slug = "loveland";
                gallery.LandingPageUrl = "loveland.html";
                gallery.NextGallerySlug = "timber-kings";
                gallery.PublishedDate = DateTime.Now;
                gallery.Photos.Add(CreateGalleryPhoto(context, "loveland-one.jpg"));
                gallery.Photos.Add(CreateGalleryPhoto(context, "loveland-two.jpg"));
                gallery.Photos.Add(CreateGalleryPhoto(context, "loveland-three.jpg"));
                gallery.Description = @"<div>These Canadian Airbnb rentals are the perfect little lairs for you and your loved one.</div>";
                context.Galleries.Add(gallery);
                context.SaveChanges();
            }
        }

        public static GalleryPhoto CreateGalleryPhoto(ChloeContext context, string filename, string description = null)
        {
            var photo = context.Photos.Where(x => x.Name == filename).Single();
            var galleryPhoto = new GalleryPhoto() { Photo = photo };

            galleryPhoto.Description = description;

            galleryPhoto.MetaData.Add(new GalleryPhotoMetaDataItem()
            {
                Content = photo.Name,
                Property = "og:image"
            });

            galleryPhoto.MetaData.Add(new GalleryPhotoMetaDataItem()
            {
                Content = photo.Title,
                Property = "og:title"
            });
            return galleryPhoto;
        }
    }
}