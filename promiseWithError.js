function verifyNumber(numero) {
  return new Promise((resolve, reject) => {
    if (numero > 10) {
      resolve("invalid number");
    } else {
      reject("valid number");
    }
  });
}

verifyNumber(15)
  .then(console.log)
  .catch(console.error);
