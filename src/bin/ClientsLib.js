function hasItem(item) {
  const foundItem = items.find((i) => i === item);
  if (!foundItem) {
    // exceptions
    // console.log(`item ${item} is not found`);
    return false;
  }
  return true;
}

function hasSupplier(suppliersObj, supplier) {
  const foundSupplier = suppliersObj.getSuppliersList().find((sup) => sup === supplier);
  if (!foundSupplier) {
    // exceptions
    // console.log(`item ${item} is not found`);
    return false;
  }
  return true;
}

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

function getCorrectList(suppliersObj, supplier, list) {
  return deleteDublicate(list.filter(hasItem));
}

function getClientRequest(itemsList, ...suppliers) {
  const correctItemsList = getCorrectList(itemsList);
  return suppliers.map((sup) => {
    return [sup, correctItemsList];
  });
}

class Suppliers {
  constructor(...arr) {
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
    const correctItems = getCorrectList(suppliers, supplier, items);
    // exception thwor using !hasSupplier(supplier);
    this.order.push([supplier, correctItems]);
    return this;
  }
}

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
    this[name] = new ClientObject(name);
    this.clientList.push(name);
    return this;
  }
}

// ошибка supplier добавляется, но несущетсвует. Не могу менять suppliers. FIX IT!
const suppliers = new Suppliers('A', 'B', 'C', 'D');
const items = ['a', 'b', 'c'];

const clients = new ClientsLib();

clients.addClient('client1');
clients.addClient('client2');
clients.addClient('client3');

const client1 = clients.getClient('client1');
const client2 = clients.getClient('client2');
const client3 = clients.getClient('client3');

client1.makeOrder('A', ['a', 'b']).makeOrder('B', ['a', 'b']);
client2.makeOrder('C', ['a']).makeOrder('B', ['b', 'c']);
client3.makeOrder('B', ['a']).makeOrder('D', ['b', 'c']);

// console.log(client1.getOrder());
// console.log(client2.getOrder());
// console.log(client3.getOrder());

function getAllOrders(orderList) {
  return orderList.reduce((acc, client) => {
    clients.getClient(client).getOrder().forEach((i) => {
      acc.push(i);
    });
    return acc;
  }, []);
}

function formListForSuppliers(orderList) {
  orderList.forEach((i) => {
    const [sup, supItems] = i;
    supItems.forEach((i) => {
      suppliers.getSupplier(sup).push(i);
    })
  });
  suppliers.getSuppliersList().forEach((sup) => {
    const thisSupplier = suppliers.getSupplier(sup);
    suppliers.addSupplierItems(sup, deleteDublicate(thisSupplier));
  });
  return suppliers.getSuppliersList().map((i) => {
    return [i, suppliers.getSupplier(i)];
  })
}


const compiliedOrderList = getAllOrders(clients.getClientList());
// console.log(compiliedOrderList);

const resultList = formListForSuppliers(compiliedOrderList);
console.log(resultList);
