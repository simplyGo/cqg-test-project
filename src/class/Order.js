class Order {
  constructor(arr) {
    arr.forEach((i) => {
      const [sup, items] = i;
      this[sup] = items;
    })
  }
  getSuppliers() {
    return Object.keys(this);
  }
  getSupplierOrder(name) {
    if (!this.isSupplierOrder(name)) {
      return this;
    };
    return this[name];
  }
  setSupplierOrder(name, items) {
    if (this.isSupplierOrder(name)) {
      this[name] = items;
      return this;
    };
    return this;
  }
  addSupplierOrder(name, items) {
    if (!this.isSupplierOrder(name)) {
      this[name] = [];
    }
    this[name].push(items);
    return this;
  }
  isSupplierOrder(name) {
    return !this[name] ? false : true;
  }
}

export default Order;
