import { clients } from '../data/database'; // load database

function getClientRequest(itemsList, ...suppliers) {
  const correctItemsList = getCorrectList(itemsList);
  return suppliers.map((sup) => {
    return [sup, correctItemsList];
  });
}

function getAllOrders(orderList) {
  return orderList.reduce((acc, client) => {
    clients.getClient(client).getOrder().forEach((i) => {
      acc.push(i);
    });
    return acc;
  }, []);
}

export { getClientRequest, getAllOrders }
