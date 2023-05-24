process.env.UV_THREADPOOL_SIZE=1;
const https = require("https");
const crypto = require('crypto');
const fs = require('fs');  // file system module : used to read hard drives modules

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


function doHash(){
    crypto.pbkdf2('a','b',100000,512,'sha512', ()=>{
        console.log('Hash:',Date.now()-start);
    })
}

tocheck();

fs.readFile('multitask.js', 'utf-8', () => {
    console.log('fs:', Date.now()-start);
})

doHash();
doHash();
doHash();
doHash();

