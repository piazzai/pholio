# pholio

Pholio is a responsive one-page theme for an online portfolio website. Its main feature is a grid of project cards: on click, these open pop-up windows where more details about a project are displayed, together with an image, a carousel (available in various flavors), or an embedded video. Two more sections are included to provide more information about the user, such as a biography or a professional statement.

The typography is based on the [Alegreya Sans family](https://www.huertatipografica.com/en/fonts/alegreya-sans-ht), which adds a calligraphic touch to the traditional cleanliness and legibility of sans-serif typefaces. Additional liveliness is provided by the use of [Typed.js](https://mattboldt.com/demos/typed-js/) in the title section. The theme ships with a 404 page that links back to the index.

Visit the [demo website](https://pholio.netlify.app) to see the theme in action.

![](https://github.com/piazzai/pholio/blob/master/src/assets/img/screenshot.jpg)

## Installation

1.  Clone this repository.
2.  Rename it to `[username].github.io`.
3.  Start editing!

## Usage

### Basic

### Advanced

Users familiar with [Node.js](https://nodejs.org/en/) can build the site from source. First, you need to install dependencies by running `npm install` in the root folder. Then, you can build the site by running `npm start`. If you change the list of the dependencies in `package.json`, you will need to install again.

The main difference with basic usage is that you have to edit files in the `src` folder. Content editing takes place in Pug files within `src/pug` ([see the docs](https://pugjs.org/)). To change style elements, including type and color scheme, you can edit SCSS files in `src/scss`. Like before, you can customize favicons in the `assets` folder, and naturally, you have to customize cover, avatar, and portfolio images in `assets/img`.

Upon running `npm start`, source files get compiled into the `dist` folder. Upload this folder to whatever service is hosting your website.

## Credits

The theme would not exist without the following projects:

- [Bootstrap](https://getbootstrap.com/)
- [Font Awesome](https://fontawesome.com/)
- [Open Color](https://yeun.github.io/open-color/)
- [Typed.js](https://mattboldt.com/demos/typed-js/)
- [Alegreya Sans](https://www.huertatipografica.com/en/fonts/alegreya-sans-ht)

## Bugs

If you find any problem using this theme, please [open an issue](https://github.com/piazzai/pholio/issues).
