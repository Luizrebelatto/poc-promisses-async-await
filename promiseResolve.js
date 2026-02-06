function validate(x) {
  if (x > 10) return Promise.resolve(true);
  return fetch("/check").then(r => r.ok);
}
