
[![batjs](http://i.imgur.com/q1xhk03.png)](#)

# batjs [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![Version](https://img.shields.io/npm/v/batjs.svg)](https://www.npmjs.com/package/batjs) [![Downloads](https://img.shields.io/npm/dt/batjs.svg)](https://www.npmjs.com/package/batjs) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> This is the NodeJS bridge for BAT -- A minimalist tool for building native desktop applications using WEB technologies.

## :cloud: Installation

```sh
$ npm i --save batjs
```


## :clipboard: Example



```js
// Dependencies
var Bat = require("batjs");

Bat({
    d: "test.html"
  , s: "800x500"
  , cwd: __dirname
});
```

## :memo: Documentation


### `Bat(options, callback)`

#### Params
- **Object** `options`: A string representing the document that should be loaded or an object containing the `Bat` options. Also, the following custom and optional fields:

 - `cwd` (String): An optional key representing directory where `bat` should be ran.
- **Function** `callback`: The callback function.

#### Return
- **Exec** The `Exec` instance of the `bat` process.



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`bnotify`](https://github.com/IonicaBizau/bnotify)—A notification system written in NodeJS using the BAT platform.

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
