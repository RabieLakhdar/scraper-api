const http = require("http");
const app = require("./app");

const port = process.env.PORT || 3003;

const server = http.createServer(app);
server.listen(port, (err) => {
    if (err) console.error('❌ Unable to connect the server: ', err);
    console.log(`🌍 Server listening on port ${port}`);
  });