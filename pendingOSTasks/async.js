const https = require("https");
const start = Date.now();

function tocheck() {
  https
    .request("https://www.google.com", (res) => {
      // here res is callback fucction
      res.on("data", () => {});
      res.on("end", () => {
        console.log(Date.now() - start);
      });
    })
    .end();
}

tocheck();
tocheck();
tocheck();
tocheck();
// tocheck();
// tocheck();