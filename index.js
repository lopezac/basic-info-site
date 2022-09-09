const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");

  let path = "./views/";

  switch (req.url) {
    case "/":
      path += "index.html";
      break;
    case "/about":
      path += "about.html";
      break;
    case "/contact-me":
      path += "contact-me.html";
      break;
    case "/style.css":
      res.setHeader("Content-Type", "text/css");
      path = "./style.css";
      break;
    default:
      res.statusCode = 404;
      path += "404.html";
      break;
  }

  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else res.end(data);
  });
});

server.listen(3000, () => {
  console.log("Listening");
});
