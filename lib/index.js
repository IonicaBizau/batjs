// Dependencies
var Exec = require("child_process").exec
  , OArgv = require("oargv")
  ;

/**
 * Bat
 *
 * @name Bat
 * @function
 * @param {Object} options A string representing the document that should be loaded
 * or an object containing the `Bat` options. Also, the following custom and optional fields:
 *
 *  - `cwd` (String): An optional key representing directory where `bat` should be ran.
 *
 * @param {Function} callback The callback function.
 * @return {Exec} The `Exec` instance of the `bat` process.
 */
var Bat = module.exports = function (options, callback) {

    // Handle document
    if (typeof options === "string") {
        options = {
            d: options
        };
    }

    // Get the cwd
    var cwd = options.cwd || process && process.cwd() || __dirname;
    delete options.cwd;

    // Run the command
    var process = Exec(OArgv(options, "bat"), { cwd: cwd }, callback);
    return process;
};
