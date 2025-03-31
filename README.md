# ✨ Star Wars ✨ - characters list & edit

### Live page: [creatim-wars.netlify.app](https://creatim-wars.netlify.app/) 🌟.

Get a list of characters from an API and display them on a page.

---

### API used: [StarWars API](https://github.com/akabab/starwars-api).

I chose this API, because it included images. I'm not a fan of referenced images, but given that this was the best choice I found, I think they work for now.

**Some images don't load, so there's error in the console.** I was thinking of maybe finding the images I like and connect them to the IDs of the characters. Maybe *`@todo`* for future. :)

I must acknowledge, **I changed the design** a bit - I believe the information is a bit more clearer to see now. I took the design that was provided as an inspiration and did not follow it 100%. I know this is not always encouraged, so I wanted to note this here. I absolutely will follow a design if that's a requirement.

## Technologies

### Vue.js

I decided to build the project as a vue app. 

I used [🍍 Pinia](https://pinia.vuejs.org/) for storing the data and [vue router](https://router.vuejs.org/) to handle potential other/sub-pages to come. I added a 404 just to make the links point to a page - even if this is a 404 page.

The app is written with [TypeScript](https://www.typescriptlang.org/).

### TailwindCSS

For styling I used a help of [Tailwind CSS](https://tailwindcss.com/). I do not have a lot of experiences working with it yet, so I wanted to take an opportunity to learn how to work with it more. So far, I've only worked with writing my custom CSS (with SCSS), but seeing what the trends are, I wanted to give it a try.

### Icons

For icons I used [Iconify](https://iconify.design/docs/icon-components/vue/). There aren't many used, but the ones that are felt needed. I'd love to try and create custom icons some time in the future.

## Live page

The code is deployed to [creatim-wars.netlify.app](https://creatim-wars.netlify.app/), and can be viewed and tested.


### Project Setup

- built with `yarn`.
- compile and hot-reload for development: `yarn dev`
- type check, compile and minify for production `yarn build`
- lint with [ESLint](https://eslint.org/) `yarn lint`

For more information I am available at [email](mailto:lokarkristina79@gmail.com) & [linkedIn](https://www.linkedin.com/in/lokarkristina/).
