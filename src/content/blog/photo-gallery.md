---
title: 'I just want my photos to be files'
description: 'After a decade of fighting iCloud, Google Photos, and Proton to get my photos out as plain files, I gave up and started building my own photo app.'
pubDate: '2026-06-05'
category: 'Build Notes'
heroImage: '../../assets/tone-sample-blue-architecture.jpg'
# focusEffect: 'scroll-dark'
homeOrder: 1
status: 'Published' 
---

Why does it have to be so goddamn hard to move a photo library?

I've been using Apple Photos and carefully curating albums for over a decade. The photos themselves aren't the problem. I can export photos. The problem is everything around them.

Albums. Favorites. Losing how I organized my memories across all those years.

:::waffle
Every time I looked into migrating away from iCloud I ended up resigning and paying for yet another month instead of dealing with losing my organisational layer.

At one point I tried moving to Google Photos instead. That wasn't much better. I paid for Google Photos for a while and it just felt like my photos were trapped again. And I also discovered the nightmarish process of removing all my media from Google Photos. Never again.

Then I tried [Proton](https://proton.me).

I had so much hope for this one but again, the photos weren't just files in Proton Drive. They were inside yet another locked system while not solving my main issue, keeping my albums.
:::

I just want my photos to be files!

Files in directories. On storage that I control.

Surely this is not too much to ask?

:::waffle
I also looked into [Immich](https://immich.app) and [PhotoPrism](https://www.photoprism.app) but yeah, nah. That's not what I wanted. I don't want to set up a home server. I want to point to any folder in my computer into an app where I can manage my photos.

All of this led me back to [pCloud](https://www.pcloud.com). Which I have been using for quite a few years after giving up on Dropbox. It beautifully backs up the media from my iPhone and it by default organizes it into year and month folders. Simple 💘

I'm happy with my backup, but I still could not get myself to cancel iCloud. I still want a lot of the functionality from a dedicated photos application.
:::

After fantasying about the perfect photo application for so long, I knew exactly what to build.

The goals were pretty simple:

- My media stays where it is
- The application is a layer on top of the filesystem
- Albums, favorites, and metadata should be portable

Everything else came from those requirements.

## Export

The whole reason I started this. After all those years of fighting to get my own photos out of someone else's system, I wasn't going to build another one, so the first thing I made sure worked was getting everything back out. Albums, favourites, exif, all of it, into one JSON file you can read with your eyes. If I ever want to walk away from my own app, I can. As it should be!

## Journal

This is a little bit of niche idea. I can see how this is not something everyone would use, but to me it makes perfect sense. I take photos to document my life, I love looking back by scrolling my gallery. And as I have been trying to establish a journaling habit, to me there is no better place for it.

It's perfect to integrate with an [Obsidian](https://obsidian.md) vault or [Logseq](https://logseq.com) graph, since the journals are just markdown files with regular markdown image links.

## Embeddings

I'm a computer vision person, and I really love visualising my datasets by transforming images into embeddings and projecting them into 2D space. Shoutout to [FiftyOne](https://voxel51.com/fiftyone) for allowing us to do this so easily when working on Machine Learning problems. And for being my inspiration for the Cluster view. I have gotten so much insight from my datasets by visualising data this way, and I wanted to bring that to a consumer facing application.

Having the embeddings already there also meant natural language search basically came for free. It's still pretty basic right now, but I'd love to push it further, maybe showing how close each result is to the search term, and using that to colour the cluster points with continuous values too.

## Dashboard

I love data, and data visualisation, so of course I built a dashboard that's just a little extra. Including a sunburst plot to vizulise storage inspired by [Filelight](https://apps.kde.org/filelight/) (which I absolutely love and always use to figure out what's eating up space on my local drive). So I thought it'd be great to have that a similar view for my photos and videos across all of my drives.

## Duplicates

This was a big one for me. I have a bunch of different cameras and have been backing things up in different places for years, DSLR images imported into iCloud, double backups of things I wasn't sure I'd saved, GoPro footage in both iCloud and on a local drive. You know how it is. And as I knew I'd be looking at thousands of duplicates, going through them quickly was non-negotiable, so of course I included keyboard shortcuts to power through those cleanups.

## Try it

I'm just really enjoying slowly building my dream app.

If this sounds like something that would be useful for you as well, you can read more about it and sign up for beta testing [here](/projects/photo-gallery/).
