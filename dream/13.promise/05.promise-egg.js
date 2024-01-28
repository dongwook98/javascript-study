function fetchEgg(chicken) {
  return Promise.resolve(`${chicken} => 🥚`);
}

function fryEgg(egg) {
  return Promise.resolve(`${egg} => 🍳`);
}

function getChicken() {
  // return Promise.resolve(`🏡 => 🐓`);
  return Promise.reject(new Error('치킨을 가지고 올 수 없음!'));
}

getChicken()
  .catch((error) => {
    console.log(error.name);
    return '🐣'; // 땜빵 가능
  })
  .then((chicken) => fetchEgg(chicken))
  .then((egg) => fryEgg(egg))
  .then((friedEgg) => console.log(friedEgg));
