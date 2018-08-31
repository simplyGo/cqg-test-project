class Suppliers {
  constructor(arr) {
    this.suppliersList = arr;
    arr.forEach((i) => {
      this[i] = [];
    })
  }

  getSupplier(name) {
    return this[name];
  }

  getSuppliersList() {
    return this.suppliersList;
  }

  addSupplier(sup) {
    this.suppliersList.push(sup);
    this[sup] = [];
    return this;
  }

  addSupplierItems(sup, items) {
    this[sup] = items;
    return this;
  }
}
export default Suppliers;
