import { getCorrectList } from '../function/correctList';

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
    const correctItems = getCorrectList(items);
    // exception throw using !hasSupplier(supplier);
    this.order.push([supplier, correctItems]);
    return this;
  }
}

export default ClientObject;
