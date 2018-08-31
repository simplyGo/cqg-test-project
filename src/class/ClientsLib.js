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
    } catch(err) {
      return this;
    }
    this[name] = new ClientObject(name);
    this.clientList.push(name);
    return this;
  }
}

export default ClientsLib;
