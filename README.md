## Harp-Starter

A [Harp](http://harpjs.com/) boilerplate that allows use of other npm modules in templates.

### Components

- [Bootstrap](http://getbootstrap.com/) and [jQuery](https://jquery.com/)
- [Browserify](http://browserify.org/)
- [Font Awesome](http://fortawesome.github.io/Font-Awesome/)

### External libraries

- [Moment.js](http://momentjs.com/)
- [Underscore.js](http://underscorejs.org/)
- Easy to add other npm libraries

## Justification

Harp is an excellent and beautifully simple static site generator (and server). I most often use Harp to compile to static files, then sync em up to a simple server (like nginx or Apache). 

I've found myself repeating myself repeating myself time and time and time again, project after project after project. So I  put together this little boilerplate to save myself some future time.

Maybe it'll help you. Feel free to clone, fork, and send in pull requests.

### Harp offers no support for external libraries in templates

One of the biggest complaints I've had about Harp is that I could never pull in other node modules, things like moment.js and underscore.js. In the past I've resorted to using libraries like these only in the browser. I found myself writing ugly and complicated iterations over JSON from `_data.json` files or formatting human-friendly dates only on the front-end via JavaScript. 

**Wouldn't it be great if I could use underscore or moment directly in my templates?!**

This is the main justification for this bolierplate. While I'm at it, I've included some other modules and resources that I typically use, like Bootstrap 3.x and Browserify. (They're easy enough to remove if you don't want them.)

[An article by Remy Sharp](https://remysharp.com/2014/09/30/wordpress-ghost-harp-pt2#use-of-special-helpers-inside-harp) clued me into a way of wrapping Harp's `compile` and `serve` features from my own node script, allowing me to make moment.js and underscore.js (and others) available to my Harp templates. Now (during the compile!) I can iterate using underscore and format dates nicely with moment.

## Getting Started

### 1. Install a few modules globally:

    npm install -g harp watchify

### 2a. Clone the git repo **OR** see 2b

    git clone https://github.com/evendev/harp-starter my-project

### 2b. Use the repo as a boilerplate

    mkdir my-project && cd my-project
    harp init -b evendev/harp-starter

### 3. Start up the dev server

```shell
npm run dev
```

## Package Scripts

Have a look at the `scripts` section in `package.json`. Everything should make pretty good sense to you.

The two scripts you'll run most often are:

### dev

    npm run dev

- Serves the site locally, on port 9000 by default (override this with `--port=XXXX`)
- Watches `.js` changes and recompiles

### build

Compiles the site to static files in `/www`

    npm run build

## Layouts

**A note on layouts:**

For lots of my projects, I end up having to avoid Harp's built in `_layout` and `partial()` features, as I find I need more power and flexibility. 

If you use **both** Jade's native layouts (with `extends`) and Harp's `_layout`s and `partial()` features, you'll probably encounter path issues and errors: One expects relative paths, while the other expects root-relative paths. 

I avoid this inconsistency by exclusively using native Jade. This isn't to say that you can't throw a `partial()` call in there or that you can't use a `_layout` in a subdirectory. Just know that you may have to jump through some hoops to get the paths just right when using both native Jade and Harp's built-in layout features.

You're welcome to wipe out the `_layouts` directory and modify the `_layout.jade` file if you'd rather use Harp's built in features.

## Contributing

- Create issues in GitHub
- Feel free to send pull requests