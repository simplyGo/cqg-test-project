// добавить проверку на массив в пользовательском вводе

function getSuppliers(userInput) {
  return userInput.split(', ');
}

function getItems(userInput) {
  return userInput.split(', ');
}

function getClientsNumber(userInput) {
  return userInput;
}

function getClientName(userInput) {
  return userInput;
}

export { getSuppliers, getItems, getClientsNumber, getClientName }
