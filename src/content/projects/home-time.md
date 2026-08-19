---
title: 'Home Time'
description: 'A cross-platform browser extension that overlays Hemnet listings with information on public transport access, commute times for our most important destinations and monthly costs difference.'
pubDate: 2026-08-15
stack: ['TypeScript', 'React', 'WXT', 'Browser extension']
status: 'on-hold'
featured: true
projectOrder: 3
# NEW SCREENSHOT: Replace this card/social-preview hero with the strongest new gallery overview shot.
heroImage: '../../assets/home-time/home-time-hero.png'
draft: false
---

I made this because I'm trying to find my dream home (I don't really know what I want but I guess building this is part of the process). 

## Features

This is very much a work in progress, but here is what I have done so far.

### Hemnet overlay

My endless hours in Hemnet were a little frustrating as I had to put every listing into Google Maps to decide if it was a good fit. My partner and I work in opposite directions. He drives, and I take the train (and will never trade reading through my commute for sitting in traffic). 

Before I even open a listing, I'd like to know:
- what the public transport access is like for the property and 
- how long it will take me to get to my most important destinations.
 
So I added an overlay directly onto Hemnet listings so I can see all of that without having to navigate into the listing. I also made sure I could set different modes of transportation per defined destination. And also included an estimate of how my monthly costs would change if I were to buy that property, as money is also a kind of important 😇

![Home Time overlay in Hemnet](../../assets/home-time/home-time-overlay.jpg)

### No account needed!

I have too many accounts for far too many things, and most of them I didn't want to create in the first place but they kinda made me. So, no Hemnet, not today, I do not want to create a another account. And with this, I don't need to. I can save my listings, enrich them with metadata I need (want?) and most of it never leaves my browser. The only network calls fetch travel times and public transport information, using my own API keys.

![Saved listings, dark mode](../../assets/home-time/home-time-listings-dark.png)

I am also serving light mode to my imaginary users:
![Saved listings, light mode](../../assets/home-time/home-time-listings-light.png)

### Centralised viewing times

When I save a listing, viewing times for the property are automatically added to a viewings tab. There we can see all the viewing times for all saved properties in cronological order. There is also a handy link to take you to directions to the property. I also added a button to download an `.ics` file to viewing times can be saved to my calendar.

![Viewing times](../../assets/home-time/home-time-viewings.png)

### Buy vs. rent calculator

This was something I had not imagined would be there at first. It started with me trying to understand how having a mortgage would impact my savings potential and how long it would actually take for the monthly cost of buying to be lower than renting. It ended up with me extremely confused about all sorts of financial rules (investment account taxation, Swedish amortization rules, exit costs and real estate capital gains 🥵) but with a lot of assistance I included minimum amortization by loan-to-value (skipped the income-based 1% add-on), ränteavdrag with the 100.000 kr per-person cap, ISK schablonskatt approximated as a drag on investment returns and all sorts of other fun sliders that can be changed to see how rich I'll be if I make it to my 80s 😉

The calculator is a projection built on assumptions, not a prediction and definitely **not financial advice**. I kept the investing side very simple, whatever is left after housing and living expenses are paid go into an ISK with index funds. The timeline only goes up to the last mortgage payment, because things change dramatically after that.

![Buy vs. rent calculator](../../assets/home-time/home-time-calculator.png)

## Built with

| Layer         | Tech                                                    |
| ------------- | ------------------------------------------------------- |
| **Frontend**  | WXT, React, TypeScript, Tailwind                        |
| **Plots**     | Recharts                                                |
| **Geo**       | Mapbox for geocoding, driving, cycling and walking      |
| **Transit**   | ResRobot v2.1 and Trafiklab's national stop list        |


## What's next

Right now I'm focused on my other applications. But I guess that when I decide that I do want to buy a house, I'll come to these:
- **Fun data sciency things:** there are a lot of cool things that could be done here. Some cool ideas: 
  - Pareto frontier for understanding the trade off of monthly cost differences versus the time spent commuting to find the best deal
  - Train a model on historical sold prices to predict the final price of saved listings
  - Monte Carlo wealth forecasting including some real data from stock market and property price fluctuations
- **Life after mortgage:** the projection stops at the final payment, so right now I can't see my costs collapse. This would be a fun thing to add and also visualize all my savings starting to get used up as well.
- **Implement JSON import:** I can already export my saved listings as CSV or JSON. The JSON even carries a version field so a future importer knows what it's reading.
- **Beyond Sweden:** I made adapters for listing sites so others could be easily added, but stopped at Hemnet. I had similar ambitions for the financial rules and transit APIs, so listing sites from other countries could eventually be supported but have not implemented it yet. Accepting contributions!
