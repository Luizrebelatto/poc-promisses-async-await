// New way
const { promise, resolve, reject } = Promise.withResolvers();
// Old way
let resolveFn, rejectFn;

const promise = new Promise((resolve, reject) => {
  resolveFn = resolve;
  rejectFn = reject;
});
