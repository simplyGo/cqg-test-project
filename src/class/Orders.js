import formListForSuppliers from '../function/formFinalList';

class Orders {
  constructor(clientsLib) {
    const arr = formListForSuppliers(clientsLib.getClientList());
    arr.forEach((i) => {
      const [sup, items] = i;
      this[sup] = items;
    })
  }
}

export default Orders;
