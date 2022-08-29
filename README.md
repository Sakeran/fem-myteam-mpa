# fem-myteam-mpa

This is a solution to the [myteam website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/myteam-multipage-website-mxlEauvW). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Notes

(Finished Augest 29th, 2022)

I didn’t really do anything new with this project. So far as layout and overall design go, this is functionally the same website as the [PayAPI](https://www.frontendmentor.io/solutions/payapi-static-site-with-astro-tailwindcss-RG-irKjRSM) challenge I worked on previously, albeit with more straightforward CSS and illustrations. This meant I was able to use the same tech stack as last time, but without the overhead of all the troubleshooting. Together with some other optimizations to my workflow, I ended up saving 2-3 days of development time over PayAPI, which isn't nothing.

The only component that really gave me pause this time around was the "Team Member info" widget that can be seen on the About page, which presented an interesting a11y problem to solve. Each of these "cards" has a front- and back-face, which can be toggled between using a button underneath it. However, the visual "flipping" effect is meaningless to a screen reader, which relies on the DOM structure. If the component was going to make any sense to an AT-user, then I needed to make sure the back face followed the toggle button in the DOM, regardless of what it looked like visual:ly.

After half an evening of agonizing, I settled on implementing the back face as a kind of custom [\<details\>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details) component. I'm still not 100% happy with this solution (the tabbing experience is kind of "zig-zaggy" and not ideal), but it's the best I could come up with given my current knowledge.

Everything else beyond that was fairly painless. I made some improvements to my TailwindCSS usage (custom modifiers can cut down on a lot of repetition), and made use of Svelte for most of the interactive components, at least when I remembered that was an option. I also started the project thinking that I might animate some of the decorative SVGs, particularly on the home page, but ultimately ended up dropping this as I found the extra motion didn't add much appeal to the design.

[A live version of this project can be found here.]()
