# pholio

Pholio is a Bootstrap-based, responsive one-page theme for an online portfolio website, born as a variant of the [Freelancer theme](https://startbootstrap.com/theme/freelancer) developed by [StartBootstrap](https://startbootstrap.com/). Its main feature is a grid of project cards: on click, these open pop-up windows where more details about a project are displayed, together with an image, a carousel (available in various flavors), or an embedded video. Two more sections are included to provide more information about the user, such as a biography or a professional statement.

The typography is based on the [Alegreya Sans family](https://www.huertatipografica.com/en/fonts/alegreya-sans-ht), which adds a calligraphic touch to the traditional cleanliness and legibility of sans-serif typefaces. Additional liveliness is provided by the use of [Typed.js](https://mattboldt.com/demos/typed-js/) in the title section. The theme ships with a 404 page that links back to the index.

Visit the [demo website](https://pholio.netlify.app) to see the theme in action.

![](https://github.com/piazzai/pholio/blob/master/screenshot.jpg)

## Installation

1.  Clone this repository.
2.  Rename it to `[username].github.io`.
3.  Start editing!

## Usage

### Basic

It is possible to use the theme without bothering with source files. Just take the contents of the `demo` folder and move them to the root, deleting everything else. You just need to edit `index.html` to customize the site. Some basic knowledge of HTML is helpful ([read here](https://developer.mozilla.org/en-US/docs/Learn/HTML)) but not required. Just search for the content you want to replace from the demo website, and rewrite it without fiddling with HTML tags.

You should replace the cover, avatar, and portfolio images in `assets/img`, unless you really like penguins. You should also customize the favicons. To generate your own icons, you can use an online tool like [this one](https://favicon.io/).

With some knowledge of HTML you could add more projects to the grid by copy-pasting elements of the index's structure. With a basic understanding of CSS, you could also customize the color scheme by editing the `css/styles.css` file. However, at this point it would probably be simpler to switch to advanced usage.

### Advanced

You can build the site from source using [Node.js](https://nodejs.org/en/). First, you need to install dependencies by running `npm install` in the root folder. Then, you can build the site by running `npm start`.

The main difference with basic usage is that you work directly on source files, in the `src` folder. Content editing takes place in Pug files within `src/pug`. Pug is a language that compiles and renders into well-structured HTML. If you know HTML it is quite intuitive, but if you want more information on how to write Pug code, [see the docs](https://pugjs.org/). To change style elements, including type and color scheme, you can edit SCSS files in `src/scss`. Naturally, you still have to customize favicons in the `assets` folder, as well as cover, avatar, and portfolio images in `assets/img`.

Upon running `npm start`, source files get compiled and rendered into the `dist` folder. Upload the contents of this folder to whatever service is hosting your website.

## Credits

This theme would not exist without the following projects:

- [Bootstrap](https://getbootstrap.com/)
- [Font Awesome](https://fontawesome.com/)
- [Open Color](https://yeun.github.io/open-color/)
- [Typed.js](https://mattboldt.com/demos/typed-js/)
- [Alegreya Sans](https://www.huertatipografica.com/en/fonts/alegreya-sans-ht)

## Bugs

If you find any problem using the theme, please [open an issue](https://github.com/piazzai/pholio/issues).
