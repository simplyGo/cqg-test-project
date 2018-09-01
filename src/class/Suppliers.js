function isNonStrInArray(arr) {
  return arr.findIndex((item) => typeof item !== 'string' || item === '') !== -1;
}

class Suppliers {
  constructor(arr) {
    this.suppliersList = [];
    if (!Array.isArray(arr)) {
      throw new Error(`${arr} is not Array`);
    };
    if (isNonStrInArray(arr)) {
      throw new Error(`Supplier name must be a string`)
    };
    this.suppliersList = arr;
    arr.forEach((i) => {
      this[i] = [];
    });
  }
  getSupplier(name) {
    this.isSupplier(name);
    return this[name];
  }

  getSuppliersList() {
    return this.suppliersList;
  }

  addSupplier(sup) {
    if (this.isSupplier(sup)) {
      throw new Error(`Supplier ${sup} is already exist`);
    };
    this.suppliersList.push(sup);
    this[sup] = [];
    return this;
  }
  addSupplierItems(sup, items) {
    if (typeof sup !== 'string') {
      throw new Error(`Supplier name must be a string`);
    }
    if (!this.isSupplier(sup)) {
      throw new Error(`${sup} is not a supplier`);
    }
    items.forEach((i) => {
      if (typeof i !== 'string') {
        throw new Error(`You're trying to add non string item to supplier ${sup}`);
      }
      if (i.length === 0) {
        throw new Error(`You're trying to add an empty string item to supplier ${sup}`)
      }
    })
    this.isSupplier(sup);
    this[sup] = items;
    return this;
  }
  hasItem(sup, item) {
    this.isSupplier(sup);
    const supplierItems = this[sup];
    return supplierItems.find((i) => i === item) !== undefined;
  }
  isSupplier(name) {
    if (!this[name]) {
      throw new Error(`${name} is not a supplier`);
    };
    return true;
  }
}

export default Suppliers;
