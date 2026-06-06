---
title: 'I just want my photos to be files'
description: 'After a decade of fighting iCloud, Google Photos, and Proton to get my photos out as plain files, I gave up and started building my own photo app.'
pubDate: '2026-06-05'
category: 'Build Notes'
heroImage: '../../assets/tone-sample-blue-architecture.jpg'
# focusEffect: 'scroll-dark'
homeOrder: 1
---

Why does it have to be so goddamn hard to move a photo library?

I've been using Apple Photos and carefully curating albums for over a decade. The photos themselves aren't the problem. I can export photos. The problem is everything around them.

Albums.  
Favorites.  
Losing how I organized my memories across all those years.  

:::waffle
Every time I looked into migrating away from iCloud I ended up resigning and paying for yet another month instead of dealing with losing my organisational layer. 

At one point I tried moving to Google Photos instead. That wasn't much better. I paid for Google Photos for a while and it just felt like my photos were trapped again. And I also discovered the nightmarish process of removing all my media from Google Photos. Never again.

Then I tried [Proton](https://proton.me).

I had so much hope for this one but again, the photos weren't just files in Proton Drive. They were inside yet another locked system while not solving my main issue, keeping my albums.
:::

I just want my photos to be files!

Files in directories.  
On storage that I control.  

Surely this is not too much to ask? 

:::waffle
I also looked into [Immich](https://immich.app) and [PhotoPrism](https://www.photoprism.app) but yeah, nah. That's not what I wanted. I don't want to set up a home server. I want to point to any folder in my computer into an app where I can manage my photos.

All of this led me back to [pCloud](https://www.pcloud.com). Which I have been using for quite a few years after giving up on Dropbox. It beautifully backs up the media from my iPhone and it by default organizes it into year and month folders. Simple 💘

I'm happywith my backup, but I still could not get myself to cancel iCloud. I still want a lot of the functionality from a dedicated photos application.
:::

After fantasying about the perfect photo application for so long, I knew exactly what to build.

The goals were pretty simple:
- My media stays where it is
- The application is a layer on top of the filesystem
- Albums, favorites, and metadata should be portable

Everything else came from those requirements.

## Export

The whole reason I started this. The whole library and metadata can be exported into JSON. You know what photos belong to what album, what's a favourite and what's not, and all the exif metadata is also preserved in there. This makes it super easy to parse, migrate and do whatever you want with your data. As it should be! 

## Journal

I had some really niche ideas, like including journaling. I can see how this is not something everyone would use, but to me it makes perfect sense. I take photos to document my life, I love looking back by scrolling my gallery. And as I have been trying to establish a journaling habit, to me there is no better place for it.

When I built this, it was following the same principle as everything else: local first, this is just another file the app doesn't own. You get to choose which folder you will use to save your markdown files. So this is perfect to integrate with an Obsidian vault or Logseq graph. The journals are just markdown files with markdown image links.

## Embeddings

### Cluster view

I'm a computer vision person. And I really love visualising my datasets by transforming my images into embeddings and projecting them into 2D space. Shoutout to FiftyOne for allowing us to do this so easily when working on Machine Learning problems. They were my inspiration for the Cluster view. I have got so much insight from my datasets by visualising data this way, and I wanted to bring this to a consumer facing application. I thought it would also be perfect to find similar photos, maybe cull the library, and it's just a neat way to look at your photo library. 

One of the features I'm looking forward to implementing is being able to select parts of the cluster (lasso, polygon or whatever really) and use that as a filter. 


### Natural language search

Another cool thing about already having the embeddings is that we can easily implement natural language search. I'm using bundled CLIP models to encode images and text used to search the libraries. This feature is still very basic, it only returns a fixed number of images matching the search. I want to implement something a little smarter, and maybe an option to show on each image how close they are to the search term - this would also be a really neat way to colour the cluster points with continuous values.

## Dashboard

I love data. And data visualisation, so of course I built a dashboard so I can understand what is in my library. Right now it's pretty basic but it has some cool things. The first plot I wanted to do is a cumulative line plot showing how my library has grown over time - and how photos compare to videos. 

As part of this application is also finding ways to clean up my library, I also have a storage sunburst plot inspired by Filelight, which I absolutely love and always use to figure out what is eating up space in my drives. I thought this would be super helpful to see across all my drives.

## Duplicates

Find duplicates across all your drives! This was a big one for me as I have a bunch of different cameras and have been backing up things in different places, and I for sure have thousands of duplicates I'll have to deal with. Importing DSLR images with camera connect into my iCloud library, double backups of things I wasn't sure I saved, GoPro footage imported into iCloud as well as my local drive. You know how it is.

Counting with the fact I'd have to deal with thousands of duplicates, I made sure to include keyboard shortcuts to go through images as quickly as possible. I also want to add some more features here, for example choosing a preferred folder where to keep for some bulk duplicate resolution.

Right now I also only have exact duplicate detection, but with embeddings already calculated, near duplicates are low hanging fruit.

## Try it

If this sounds like something that would be useful for you, you can read more about it and sign up for beta testing!