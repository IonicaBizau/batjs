![BatJS](http://i.imgur.com/q1xhk03.png)

BatJs
=====
This is the NodeJS bridge for [BAT -- A minimalist tool for building native desktop applications using WEB technologies](https://github.com/IonicaBizau/bat).

## Installation

```sh
$ npm install batjs
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
1. File an issue in the repository, using the bug tracker, describing the
   contribution you'd like to make. This will help us to get you started on the
   right foot.
2. Fork the project in your account and create a new branch:
   `your-great-feature`.
3. Commit your changes in that branch.
4. Open a pull request, and reference the initial issue in the pull request
   message.

## License
See the [LICENSE](./LICENSE) file.
