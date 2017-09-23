# My Project

# Understanding 
As per given Visual Mock, I had to create a page which gives details about Projects. The page loads with defautlt Project details. And has feature to navigate across various projects.

# Tech Stack
 - HTML
 - CSS
 - Bootstrap (dependent on jQuery)
 - Grunt
 - node.js
 - express
 - Assemble
 
# The Approach
Considering the page as static one, I have tried to break down the page into smaller indepedant components which can be reused across website. The components I sortlisted are
- Header
- Banner (Can work as carousel or Feature Image)
- Project Info
- Project Details
- More Layouts
- More Projects
- Footer

As the test has time constraint of 4 hours, I was able to achieve following component
- Header
- Footer
- Banner
- Project Info
- More Projects
- Footer

I have spent most of the time designing the architecture of the page to allow scalability of code. A new component/page going to take hardly few minutes of time to integrate it in our page.

For such scalability, i have use Assemble task, which allow as to break down pages in small chunks called at partials. This partials can be clunned together on the fly to generate desired page.

I have used JSON to pass data to these partials. JSON makes the component's authoring experience easy. If the site goes to Back End integration, it also helps the BE devs in integration.

Most of the UI Integration can be done using simple CSS. I have used Bootstrap library to speed up the work for me. Also, Bootstrap carousel can be achieved with CSS animation (when not interaction is required) which will keep the page lightweight.

# Future Improvement
In absence of time constraint, i would have completed more things. Following are the improvements which can be done in future

- Adding accessibility to page
- Completion of pending components
- Lighbox integration for large images to show captions in modal. 
- A PWA integration also feasible in such page.
- Carousel using CSS animation when no user interaction is required.
- Take advantages of less power and create multi-theme support for site using mixins.
- Include Dev environment for local build, adding tasks like watch, livereload.

# Installation
```sh
$ npm install
$ grunt
$ node server.js
```
```
Open http://localhost:9000
```
The Site can also viewd here
https://au-fe-test.herokuapp.com/
