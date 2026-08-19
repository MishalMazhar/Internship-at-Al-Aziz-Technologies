# Day 2 

**Task:** Convert the previous HTML page into a properly styled webpage.

## What I actually did

First thing, I reset the browser's default spacing because apparently every browser adds its own random margin to things like headings and lists and it's never consistent. So I threw a `*` selector at the top of the file that zeroes all of that out and switches `box-sizing` to `border-box`. I didn't really believe this mattered until I commented it out just to see what would happen, and yeah everything shifted around. Lesson learned.

Then came the fun part, actually picking a vibe for the page. Since it's a space-mission dashboard I went full dark mode navy background, orange for anything important, and a monospace font for stuff that felt like data (dates, tags, nav links). Probably way too dramatic for a "Day 2 CSS basics" assignment but honestly it was a lot more fun than picking a safe grey and blue theme like everyone else probably did.

Header and hero were pretty simple, just background color and padding, everything centered because I don't know Flexbox yet so centering with text-align was basically my only option. The button was the first time I used `:hover` and I'm not gonna lie, watching the color change just from moving my mouse over it felt kind of exciting, which is a weird thing to get excited about but here we are.

The table is where I actually got stuck for a bit. I had these annoying double borders between every single cell and couldn't figure out why until I found `border-collapse: collapse`, one line and it just fixes it. Also added `:nth-child(even)` to stripe the rows a slightly different color because I was literally squinting at my own table trying to tell rows apart.

Form inputs all share one style so they don't look random and mismatched, and I made the border turn orange when you click into a field because I personally hate forms where you genuinely can't tell which box is active.


