function delay(ms, value) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(value), ms);
  });
}

const p1 = delay(3000, "Promise 1 (3s)");
const p2 = delay(1000, "Promise 2 (1s)");
const p3 = delay(2000, "Promise 3 (2s)");

Promise.race([p1, p2, p3])
  .then(result => {
    console.log("WINNER:", result);
  });
