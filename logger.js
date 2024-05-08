/**
 * ログ表示
 */
function logger (request, response, next) {
  console.log("originalUrl:",request.originalUrl);
  next();
}

module.exports = logger;