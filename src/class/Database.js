import Suppliers from './Suppliers';
import ClientsLib from './ClientsLib';
import Order from './Order';

function deleteDublicate(arr) {
  const newArr = [];
  arr.reduce((acc, item) => {
    if (acc.find((i) => i === item)) {
      return acc;
    };
    acc.push(item);
    return acc;
  }, newArr);
  return newArr;
}

class Database {
  constructor() {
    this.suppliers = new Suppliers([]);
    this.clients = new ClientsLib();
    this.order = new Order([]);
  }
  clearDatabase() {
    this.refreshClientsBase()
        .refreshSuppliers()
        .refreshOrder();
    return this;
  }
  refreshOrder() {
    this.order = new Order([]);
    return this;
  }
  refreshSuppliers() {
    this.suppliers = new Suppliers([]);
    return this;
  }
  refreshClientsBase() {
    this.clients = new ClientsLib();
    return this;
  }
  getSuppliers() {
    return this.suppliers;
  }
  setSuppliers(arr) {
    try {
      this.suppliers = new Suppliers(arr);
      return this;
    } catch(err) {
      console.log(err);
      return err;
    }
  }
  setItems(supplier, items) {
    try {
      this.suppliers.addSupplierItems(supplier, items);
      return this;
    } catch(err) {
      console.log(err);
      return err;
    }
  }
  getClients() {
    return this.clients;
  }
  formOrder() {
    try {
      const clients = this.clients;

      const list = clients.getClientList().reduce((acc, client) => {
        clients.getClient(client).getOrder().forEach((i) => {
          acc.push(i);
        });
        return acc;
      }, []);

      list.forEach((i) => {
        const [sup, supItems] = i;
        supItems.forEach((item) => {
          if (!this.suppliers.hasItem(sup, item)) {
            throw new Error(`${sup} doesn't have item [${item}]`);
          };
          this.order.addSupplierOrder(sup, item);
        });
      });

      this.order.getSuppliers().forEach((sup) => {
        const thisOrder = this.order.getSupplierOrder(sup);
        this.order.setSupplierOrder(sup, deleteDublicate(thisOrder).sort());
      });
      console.log(this.order);
      clients.informClients();
      return this.getOrder();
    } catch(err) {
      console.log(err);
      return err;
    }
  }
  getOrder() {
    return this.order;
  }
}

export default Database;
