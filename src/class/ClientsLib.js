import ClientObject from './ClientObject'

class ClientsLib {
  constructor() {
    this.clientList = [];
  }

  getClient(name) {
    return this[name];
  }

  getClientList() {
    return this.clientList;
  }

  addClient(name) {
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
    this.clientList.forEach((i) => {
      const client = this.getClient(i);
      const order = this.getClient(i).getOrder();
      console.log(`Dear client, ${i}.`);
      console.log('Your order:');
      order.forEach((delivery) => {
        const [orderSupplier, orderItems] = i;

        // console.log(orderSupplier);
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
