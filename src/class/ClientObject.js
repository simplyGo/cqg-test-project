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
    this.order.push([supplier, items]);
    return this;
  }
}

export default ClientObject;
