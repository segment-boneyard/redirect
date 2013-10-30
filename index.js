
var defaults = require('defaults');


/**
 * Expose `redirect`.
 */

module.exports = redirect;


/**
 * Generate a route that redirects to `path`.
 *
 * @param {String} path
 * @param {object} options
 *   @param {Number} status
 * @returns {Function}
 */

function redirect (path, options) {
  options = defaults(options, { status: 301 });
  return function (req, res, next) {
    res.redirect(options.status, path);
  };
}
