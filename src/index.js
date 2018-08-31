import { suppliers, items, clients } from './data/database'; // load database
import ClientsLib from './class/ClientsLib';
import { getAllOrders } from './function/getFunc';
import formListForSuppliers from './function/formFinalList';

const clientsLib = function() {
  // console.log(suppliers);
  // console.log(items);

  clients.addClient('client1');
  clients.addClient('client2');
  clients.addClient('client3');

  const client1 = clients.getClient('client1');
  const client2 = clients.getClient('client2');
  const client3 = clients.getClient('client3');

  client1.makeOrder('A', ['a', 'b']).makeOrder('B', ['a', 'b']);
  client2.makeOrder('C', ['a']).makeOrder('B', ['b', 'c']);
  client3.makeOrder('B', ['a']).makeOrder('D', ['b', 'c']);

  const compiliedOrderList = getAllOrders(clients.getClientList());

  const resultList = formListForSuppliers(compiliedOrderList);
  console.log(resultList);
}

export default clientsLib;
