function runCode(fn, ...args) {
  return Promise.try(fn, ...args)
    .catch(err => {
      console.error("Error:", err);
      return null;
    });
}
runCode(plugin.onInit);
runCode(plugin.onEvent, payload);