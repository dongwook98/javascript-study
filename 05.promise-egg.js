function fetchEgg(chicken) {
  return new Promise.resolve(`${chicken} => 🥚`);
}

fetchEgg('🐔') //
  .then((egg) => console.log(egg));
