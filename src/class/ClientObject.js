import deleteDublicate from '../function/deleteDublicate';

class ClientObject {
  constructor(name) {
    this.name = name;
    this.order = [];
  }

  getName() {
    return this.name;
  }

  getOrder() {
    return this.order;
  }

  makeOrder(supplier, items) {
    const correctItems = deleteDublicate(items);
    this.order.push([supplier, correctItems]);
    return this;
  }
}

export default ClientObject;
