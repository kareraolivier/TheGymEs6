//immediately resolved promises

// let myPromise = Promise.resolve("hello");
// myPromise
//   .then((res) => console.log(res))
//   .catch((error) => console.log("your error", error))
//   .finally(() => console.log("ok"));

// let oldPromise = new Promise((resolve, reject) => {
//   setTimeout(() => resolve(5), 5000);
// });P
// oldPromise
//   .then((res) => console.log((res += 6)))
//   .catch((er) => console.log("your error", er))
//   .finally(() => console.log("ok"));

// let fetch data....................................

function getData(method, url) {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.onload = function () {
      if (this.status >= 200 && this.status < 300) {
        resolve(xhr.response);
      } else {
        reject({
          status: this.status,
          statusText: xhr.statusText,
        });
      }
    };
    xhr.onerror = function () {
      reject({
        status: this.status,
        statusText: xhr.statusText,
      });
    };
    xhr.send();
  });
}
getData("GET", "https://jsonplaceholder.typicode.com/todos")
  .then((res) => console.log(res))
  .catch((err) => console.log("your error", err))
  .then(() => console.log("ok"))
  .catch(() => console.log("Error in the finally block"));
