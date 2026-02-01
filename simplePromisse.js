const simplePromisse = new Promise((resolve) => {
  resolve("Hello, World!");
});

simplePromisse.then(resultado => {
  console.log(resultado);
});
