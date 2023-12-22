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

async function cookFryEgg() {
  let chicken;
  try {
    chicken = await getChicken();
  } catch (error) {
    chicken = '🐔';
  }

  const egg = await fetchEgg(chicken);
  const friedEgg = await fryEgg(egg);

  return friedEgg;
}

cookFryEgg() //
  .then((cooked) => console.log(cooked))
  .catch((error) => console.log(error));
