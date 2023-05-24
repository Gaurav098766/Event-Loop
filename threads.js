// this file is created to benchmark that PBK do have to function and v r using this to detect that node is truly single threded or not.
process.env.UV_THREADPOOL_SIZE=2; // define the number of threads on which our hashing function will get assigned
const crypto = require('crypto');

const start = Date.now();

// pbkdf2(password, salt, iterations, keylen, digest, callback)

//NOTE ALL THE FUNCTIONS ARE ASYNCCHRONOUS CALLS,
// doesnt wait for one function to get finished

crypto.pbkdf2('a','b',100000,512,'sha512', ()=>{ // pbkdf2 is function in node's crypto library. It is basically a hashing algorithm
    console.log('1:',Date.now()-start);
})

crypto.pbkdf2('a','b',100000,512,'sha512', ()=>{
    console.log('2:',Date.now()-start);
})

crypto.pbkdf2('a','b',100000,512,'sha512', ()=>{
    console.log('3:',Date.now()-start);
})

crypto.pbkdf2('a','b',100000,512,'sha512', ()=>{
    console.log('4:',Date.now()-start);
})

crypto.pbkdf2('a','b',100000,512,'sha512', ()=>{
    console.log('5:',Date.now()-start);
})