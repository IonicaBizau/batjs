[![batjs](http://i.imgur.com/q1xhk03.png)](#)

# batjs [![Support this project][donate-now]][paypal-donations]

This is the NodeJS bridge for BAT -- A minimalist tool for building native desktop applications using WEB technologies.

## Installation

```sh
$ npm i -g batjs
```

## Example

```js
// Dependencies
var Bat = require("batjs");

Bat({
    d: "test.html"
  , s: "800x500"
  , cwd: __dirname
});
```

## Documentation

### `Bat(options, callback)`

#### Params
- **Object** `options`: A string representing the document that should be loaded or an object containing the `Bat` options. Also, the following custom and optional fields:

 - `cwd` (String): An optional key representing directory where `bat` should be ran.
- **Function** `callback`: The callback function.

#### Return
- **Exec** The `Exec` instance of the `bat` process.

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

 - [`bnotify`](https://github.com/IonicaBizau/bnotify)

## License

[KINDLY][license] © [Ionică Bizău][website]

[license]: http://ionicabizau.github.io/kindly-license/?author=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica@gmail.com%3E&year=2015

[website]: http://ionicabizau.net
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md