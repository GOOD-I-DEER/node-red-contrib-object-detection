let initialized = false;

module.exports = function (RED) {
  if (!initialized) {
    initialized = true;
    init(RED);
  }

};

require("path");
const serveStatic = require("serve-static");

function init(RED) {
  const app = RED.httpNode || RED.httpAdmin;
  app.use('/', serveStatic(__dirname));
}
