import { suppliers, items, clients, setSuppliers, setItems } from './data/database'; // load database
import ClientsLib from './class/ClientsLib';
import formListForSuppliers from './function/formFinalList';

const clientsLib = function() {
  setSuppliers(['A', 'B', 'C', 'D']);
  setItems(['a', 'b', 'c']);

  clients.addClient('client1').getClient('client1')
    .makeOrder('A', ['a', 'b'])
    .makeOrder('B', ['a', 'b']);
  clients.addClient('client2').getClient('client2')
    .makeOrder('C', ['a'])
    .makeOrder('B', ['b', 'c']);
  clients.addClient('client3').getClient('client3')
    .makeOrder('B', ['a'])
    .makeOrder('D', ['b', 'c']);

  const resultList = formListForSuppliers(clients.getClientList());
  clients.informClients();
}

export default clientsLib;
