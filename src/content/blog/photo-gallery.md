---
title: 'I just want my photos to be files'
description: 'After a decade of fighting iCloud, Google Photos, and Proton to get my photos out as plain files, I gave up and started building my own photo app.'
pubDate: '2026-06-05'
category: 'Build Notes'
heroImage: '../../assets/tone-sample-blue-architecture.jpg'
# focusEffect: 'scroll-dark'
homeOrder: 1
---

Why is it still so goddamn hard to move a photo library?

I've been using iCloud Photos for over a decade. I have carefully curated albums, favorites, and thousands of photos accumulated over time. The photos themselves aren't the problem. I can export photos. The problem is everything around them.

Albums.  
Favorites.  
Losing how I organized my memories for all this time.  

:::waffle
Every time I looked into migrating away from Apple Photos I ended up just resigning, and paying for iCloud for yet another month. 

At one point I tried moving to Google Photos instead. That wasn't much better. I paid for Google Photos for a while and it just felt like my photos were trapped again. And I also discovered the nightmarish process of removing all my media from Google Photos. Never again.

Then I tried [Proton](https://proton.me).

I had so much hope for this one but I could not import my whole library, and again the photos weren't files in Proton Drive. They were inside another system trapping my photos and it did not solve my main issue, keeping my albums.
:::

I just want my photos to be files!

Files in directories.
On storage that I control.

Surely this is not too much to ask? 

:::waffle
I also looked into [Immich](https://immich.app), [PhotoPrism](https://www.photoprism.app) but yeah, nah. That's not what I wanted. I don't want to set up a home server. I want to mount any folder into an app where I can manage my photos.

All of this led me back to [pCloud](https://www.pcloud.com). Which I have been using for quite a a few years now after giving up on Dropbox. It beautifully backs up media from my phone and everything is organized into year and month folders. Simple 💘

But I still could not cancel iCloud. I want a lot of the functionality from a dedicated photos application.
:::

After fantasying about the perfect photo application for so long, I knew exactly what to build.

And as I'm totally hopeless when naming things, I called it Photo Gallery. Descriptive. Accurate. And not sorry.

:::waffle
You don't want to know how long I think about what to call video game characters 🫠
:::

The goals were pretty simple:
- My media stays in the filesystem
- The application is a layer on top of the files, not the owner of them
- Albums, favorites, and metadata should be portable

Everything else came from those requirements.


TODO: more on the app