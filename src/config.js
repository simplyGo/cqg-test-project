import Database from './class/Database';

function initConfig() {
  const data = new Database();

  data.setSuppliers(['A', 'B', 'C', 'D'])
      .setItems('A', ['a', 'b', 'c'])
      .setItems('B', ['a', 'b', 'c'])
      .setItems('C', ['a', 'b', 'c'])
      .setItems('D', ['a', 'b', 'c']);

  const clients = data.getClients();

  data.addClient('client1')
    .makeOrder('A', ['a', 'b', 'b', 'b'])
    .makeOrder('B', ['a', 'b']);
  data.addClient('client2')
    .makeOrder('C', ['a'])
    .makeOrder('B', ['b', 'c']);
  data.addClient('client3')
    .makeOrder('B', ['a'])
    .makeOrder('D', ['b', 'c']);

  return data;
};

export default initConfig;
