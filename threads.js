const OS = require("os");

// # of cores
console.log(OS.cpus().length);

// for windows => set UV_THREADPOOL_SIZE=1 & node app.js
// see script threads in package.json
process.env.UV_THREADPOOL_SIZE = 5;

const crypto = require("crypto");

const start = Date.now();

// libuv on C++ side has access to a Thread Pool of 4 threads

// Different in-built node modules will make use of the thread pool some of
// which are dependent upon OS
// All 'fs' modules make use of the thread pools

// Tasks running in the thread pool are the 'pendingOperations' in event loop example

crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  console.log("1:", Date.now() - start);
});

crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  console.log("2:", Date.now() - start);
});

crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  console.log("3:", Date.now() - start);
});

crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  console.log("4:", Date.now() - start);
});

crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  console.log("5:", Date.now() - start);
});
