import Database from './class/Database';

function initConfig() {
  const data = new Database();

  data.setSuppliers(['A', 'B', 'C', 'D']);
  data.setItems(['a', 'b', 'c']);

  const clients = data.getClients();

  clients.addClient('client1')
    .makeOrder('A', ['a', 'b'])
    .makeOrder('B', ['a', 'b']);
  clients.addClient('client2')
    .makeOrder('C', ['a'])
    .makeOrder('B', ['b', 'c']);
  clients.addClient('client3')
    .makeOrder('B', ['a'])
    .makeOrder('D', ['b', 'c']);

  return data;
};

export default initConfig;
