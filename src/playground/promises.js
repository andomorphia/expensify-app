/* eslint-disable */
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve({
    //   name: 'Jonathan',
    //   age: 35,
    // });
    reject('Something went wrong!');
  }, 2000);
});

console.log('before');

promise
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log('error: ', error);
  });

console.log('after');
