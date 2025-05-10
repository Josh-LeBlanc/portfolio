---
title: "First Blog: Making This Website"
date: "2025-05-10"
tag: "project"
excerpt: "my first blog post. it's about how i vibe coded this website"
---
# beginning
I got the idea to make this website when cursor gave out free pro for students for a year. I had seen this css library [WebTUI](https://webtui.ironclad.sh/) a little while knew I wanted to make this website, but didn't want to sink in all of the time it would take to make it. Enter: vibe coding.
# vibe coding
So far my use of AI in programming has been just using the free web UIs to ask pretty simple questions, and felt like they help me learn simple stuff a bit quicker. Once my questions got more complex they became less effective. For this project, I am relying pretty much exclusively on Cursor, I have pretty much zero front end experience. I don't remember how exactly I started the project, but very little of this code was by hand. I just had to ask Cursor to make a website that had a page for projects and blogs, and it gave me this next project, which I have extended upon.
## webtui
Most of my manual work was working with the WebTUI documentation because the initial product I was given by cursor was horrendous looking, and I didn't know anything about CSS so I had to do some learning. But now I think it looks _really_ nice.
## dynamic blogs
This one cursor struggled with a bit, mainly because I wanted to not only render markdown files, but also render the code snippets with syntax highlighting and render LaTeX. I spent like ~10 Claude 3.5 messages on the first attempt and it just kept adding a bunch of garbage. It implemented the code to turn a markdown file into a blog on it's own page, but could not figure out how to get the syntax highlighting and latex rendering to work. I ended up just resetting to the last commit before starting the dynamic blog part.
### getting the blogs to work with syntax highlighting and latex
The trick that made Cursor able to do this was telling it from the get go that I wanted the blogs to be able to syntax highlight code and render latex. In the previous attempt, I started by asking it to load blogs from markdown files and then in a separate query asked about the syntax highlighting and latex rendering, so I'm guessing it just didn't plan ahead.
## where i'm at now
Working on getting the projects page to be easily maintainable like the blogs are currently.

All in all there were some frustrating moments, mainly driven by the fact that I don't really understand the code cursor is writing, but I was able to get a product with much more functionality than I would have been able to create by hand.
