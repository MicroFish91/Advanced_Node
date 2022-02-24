const https = require("https");
const start = Date.now();

function doRequest() {
  https
    .request("https://www.google.com", (res) => {
      res.on("data", () => {});
      res.on("end", () => {
        console.log(Date.now() - start);
      });
    })
    .end();
}

// Requests delegated to the OS and so don't need to use node threadpool
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
