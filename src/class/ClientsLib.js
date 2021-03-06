import ClientObject from './ClientObject'

class ClientsLib {
  constructor() {
    this.clientList = [];
  }

  getClient(name) {
    if (typeof name !== 'string' || name === '') {
      throw new Error('Client name should be a string');
    }
    if (!this[name]) {
      throw new Error(`There's no client ${name}`);
    }
    return this[name];
  }

  getClientList() {
    return this.clientList;
  }

  addClient(name) {
    try {
      if (typeof name !== 'string' || name === '') {
        throw new Error('Client name should be a string');
      }
      this[name] = new ClientObject(name);
      this.clientList.push(name);
    } catch(err) {
      return this;
    }
    return this[name];
  }

  addClientRow(name) {
    try {
      if (typeof name !== 'string' || name === '') {
        throw new Error();
      }
      this[name] = new ClientObject(name);
      this.clientList.push(name);
    } catch(err) {
      return this;
    }
    return this;
  }

  informClients() {
    console.log(`
      Notify to clients
      `);
    this.clientList.forEach((i) => {
      const client = this.getClient(i);
      const order = this.getClient(i).getOrder();
      console.log(`Dear client, ${i}.`);
      console.log('Your order:');
      order.forEach((delivery) => {
        console.log(delivery);
      });
      console.log('has been sent to you');
      console.log('');
    });
    // can clear list after delivering or push orders to another lib
    // this.clientList = [];
    return this;
  }
}

export default ClientsLib;
