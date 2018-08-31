import { suppliers, items, clients, setSuppliers, setItems } from './data/database'; // load database
import Orders from './class/Orders'; // class that contains combined Orders

const clientsLib = function() {
  setSuppliers(['A', 'B', 'C', 'D']);
  setItems(['a', 'b', 'c']);

  clients.addClient('client1')
    .makeOrder('A', ['a', 'b'])
    .makeOrder('B', ['a', 'b']);
  clients.addClient('client2')
    .makeOrder('C', ['a'])
    .makeOrder('B', ['b', 'c']);
  clients.addClient('client3')
    .makeOrder('B', ['a'])
    .makeOrder('D', ['b', 'c']);

  const orders = new Orders(clients);
  console.log(orders);
  clients.informClients();
}

export default clientsLib;
