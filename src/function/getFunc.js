function getClientRequest(itemsList, ...suppliers) {
  const correctItemsList = getCorrectList(itemsList);
  return suppliers.map((sup) => {
    return [sup, correctItemsList];
  });
}

export { getClientRequest }
