import Suppliers from './Suppliers';
import ClientsLib from './ClientsLib';
import Order from './Order';
import deleteDublicate from '../function/deleteDublicate';

class Database {
  constructor() {
    this.suppliers = new Suppliers([]);
    this.items = [];
    this.clients = new ClientsLib();
    this.order = new Order([]);
  }

  getSuppliers() {
    return this.suppliers;
  }
  setSuppliers(arr) {
    this.suppliers = new Suppliers(arr);
    return this;
  }
  getItems() {
    return this.items;
  }
  setItems(arr) {
    this.items = arr;
    return this;
  }
  refreshClientsBase() {
    this.clients = new ClientsLib();
  }
  getClients() {
    return this.clients;
  }
  formOrder() {
    const clients = this.clients;
    const suppliers = this.suppliers;
    const list = clients.getClientList().reduce((acc, client) => {
      clients.getClient(client).getOrder().forEach((i) => {
        acc.push(i);
      });
      return acc;
    }, []);
    list.forEach((i) => {
      const [sup, supItems] = i;
      supItems.forEach((i) => {
        suppliers.getSupplier(sup).push(i);
      })
    });

    suppliers.getSuppliersList().forEach((sup) => {
      const thisSupplier = suppliers.getSupplier(sup);
      suppliers.addSupplierItems(sup, deleteDublicate(thisSupplier));
    });
    const orderList = suppliers.getSuppliersList().map((i) => {
      return [i, suppliers.getSupplier(i).sort()];
    });
    this.order = new Order(orderList);
    clients.informClients();
    return this;
  }
  getOrder() {
    return this.order;
  }
}

export default Database;
