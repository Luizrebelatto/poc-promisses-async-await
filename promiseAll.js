function getUsers(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id > 0) {
        resolve({ id, nome: `User ${id}` });
      } else {
        reject("invalid ID");
      }
    }, 1000);
  });
}

const promisses = [
  getUsers(1),
  getUsers(2),
  getUsers(3)
];

Promise.all(promisses)
  .then((users) => {
    console.log(`All users: ${users}`);
  })
  .catch((erro) => {
    console.error(erro);
  });
