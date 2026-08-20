# Day 3

**Task:** Build a responsive navigation bar, build cards using Flexbox, build a multi-column layout using CSS Grid.

## What I actually did

Today was mostly about Flexbox. People kept saying it's the tool that fixes layout headaches and turns out that's true. My nav bar from Day 2 was just stuck in a stack logo on top, links below it, like a to-do list. I changed it to `display: flex` with `justify-content: space-between` and just like that, the logo went left and the links went right. That was it. Five lines and I fixed something that used to look messy.

I did mix up `justify-content` and `align-items` a lot though. I kept forgetting which one moves things sideways and which one moves things up and down. It also changes depending on `flex-direction`, so I had to actually draw little boxes and arrows on paper to get it in my head. Nobody tells you that part gets confusing at first.

I also made the header stick to the top of the page while you scroll, using `position: sticky`. That part was easy. But then my content started sliding under the header and looking wrong, so I had to learn what `z-index` actually does instead of just picking a random big number and hoping it worked.

Grid was the other new thing today, and honestly it felt a lot like Flexbox at first, which confused me. The difference is Flexbox is really good for one direction just a row, or just a column. Grid lets you control rows and columns at the same time. I used this line for the mission cards:

`grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));`

It sounds confusing but all it means is "make as many columns as fit, each at least 220px wide, and stretch them evenly." I didn't even need a media query for it the cards just rearrange themselves depending on how wide the screen is. That part actually surprised me.

I also added a small "quick stats" row (missions tracked, next launch, stuff like that) using Flexbox cards, just so I could see Flexbox and Grid next to each other and actually understand the difference instead of only using one.

I kept the hover effects from before, like the card lifting up and the button glowing, since that's technically part of today's lesson anyway. I'll be honest, I added a simple version of it a bit early because it made the page feel less flat.
