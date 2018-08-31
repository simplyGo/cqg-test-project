// добавить проверку на массив в пользовательском вводе

function getSuppliers(userInput) {
  return userInput.split(', ');
}

function getItems(userInput) {
  return userInput.split(', ');
}

function getTestSuppliers(...arr) {
  return [...arr];
}

function getTestItems(...arr) {
  return [...arr];
}

export { getSuppliers, getItems, getTestSuppliers, getTestItems }
