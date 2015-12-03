[![batjs](http://i.imgur.com/q1xhk03.png)](#)

# batjs [![Support this project][donate-now]][paypal-donations]

This is the NodeJS bridge for BAT -- A minimalist tool for building native desktop applications using WEB technologies.

## Installation

```sh
$ npm i --save batjs
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

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md