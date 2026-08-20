# Day 4 

**Task:** Convert a desktop webpage into a fully responsive website.

## What I actually did

First thing I did was shrink the browser down to see what my page looked like on a phone. It was bad. The nav links ran off the side, the big heading and the little orbit picture were squished together fighting for space, and the table just got chopped off. Good thing I looked before I called it finished.

To fix all this I used media queries, which are basically CSS rules that only kick in once the screen gets small enough. I used three different sizes 860px, 768px, and 480px because a tablet doesn't need the same fix as a tiny phone screen. One size does not fit all.

The nav bar gave me the most trouble. I don't know JavaScript yet so I couldn't just make a button that opens a menu normally. Instead I used this trick where you hide a checkbox on the page, make a label look like a hamburger icon, and then CSS alone shows or hides the menu based on if that checkbox is checked. Sounds weird, felt weird, but it worked, and it actually helped me understand how CSS selectors talk to each other better than I did before.

I also used something called `clamp()` on the big heading so the text size grows and shrinks smoothly instead of jumping around suddenly. Small change but it looks a lot smoother now.

For the table, instead of squeezing five columns onto a phone screen and making the text tiny and unreadable, I just let people swipe it sideways instead. Felt like the more honest fix.

I also added focus outlines so if someone uses the keyboard instead of a mouse, they can actually see which button or link they're on. I only ever tested with a mouse before, so trying it with just the keyboard was kind of eye opening, some stuff was really hard to get to.

Tested it on a laptop size, a tablet size, and a phone size in Chrome's dev tools. It works fine on all three, but I already know I'll probably go back and clean up the spacing on the hero once I actually learn Flexbox properly.
