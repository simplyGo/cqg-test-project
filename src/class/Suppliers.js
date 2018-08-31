function isNonStrInArray(arr) {
  return arr.findIndex((item) => typeof item !== 'string' || item === '') !== -1;
}

class Suppliers {
  constructor(arr) {
    this.suppliersList = [];
    try {
      if (isNonStrInArray(arr) || !Array.isArray(arr)) {
        throw new Error();
      }
      this.suppliersList = arr;
      arr.forEach((i) => {
        this[i] = [];
      });
    } catch(err) {
      this.suppliersList = [];
    }
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
    try {
      if (!this[sup]) {
        throw new Error(`${sup} is not a supplier`);
      }
    } catch (err) {
      return this;
    }
    this[sup] = items;
    return this;
  }
}
export default Suppliers;
