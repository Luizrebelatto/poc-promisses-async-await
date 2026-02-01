const promisseDelay = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Delay 2 seconds");
  }, 2000);
});

promisseDelay.then(console.log);
