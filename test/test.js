import initConfig from '../src/config';
import Suppliers from '../src/class/Suppliers';
import ClientsLib from '../src/class/ClientsLib';
import ClientObject from '../src/class/ClientObject';
import Order from '../src/class/Order';
const assert = require('assert');

const data = initConfig();

describe('class Suppliers', function() {
  var tests;

  function clearArr(arr) {
    return arr.reduce((acc, item) => {
      if (typeof item === 'string' && item !== '') {
          acc.push(item);
        };
      return acc;
    }, [])
  }

  function createSuppliersTest() {
    tests = [
      ['A', [], 'C'],
      ['', 1],
      []];
    tests.forEach((test) => {
      it (`create suppliers from ${test}`, function() {
        const testSup = new Suppliers(test);
        const expected = {
          suppliersList: [],
        }
        // console.log(testSup);
        // console.log(expected);
        assert.deepEqual(testSup, expected);
      })
    })
  }

  function addSupplierItem() {
    tests = ['A', 'B', 'C', 'D', 'E'];
    tests.forEach((test) => {
      it (`add suppliers from ${test}`, function() {
        const testSup = new Suppliers().addSupplier(test);
        const expected = {
          suppliersList: [],
        }
        expected.suppliersList.push(test);
        expected[test] = [];
        assert.deepEqual(testSup, expected);
      })
    })
  }

  function addSupplierItems() {
    tests = [
      ['A', ['a', 'b', 'c']],
      ['B', ['a', 'c']],
      ['D', ['b', 'd']]
    ];
    var list = ['A', 'B'];
    tests.forEach((test) => {
      var [sup, items] = test;
      console.log(sup);
      console.log(items);
      it (`add suppliers items from ${test}`, function() {
        const testSup = new Suppliers(list).addSupplierItems(sup, items);
        const expected = {
          suppliersList: list,
        }
        list.forEach((i) => expected[i] = []);
        if (list.findIndex((i) => i === sup) !== -1) {
          expected[sup] = items;
        };
        assert.deepEqual(testSup, expected);
      })
    })
  }

  createSuppliersTest();
  addSupplierItem();
  addSupplierItems();
});

describe('class ClientsLib', function() {
  var tests;
  function addClientString() {
    tests = [
      'client1',
      'client2'
    ];
    tests.forEach((test) => {
      it (`create suppliers from ${test}`, function() {
        const testSup = new ClientsLib().addClientRow(test);
        const expected = {
          clientList: []
        }
        expected.clientList.push(test);
        expected[test] = new ClientObject(test);
        assert.deepEqual(testSup, expected);
      })
    })
  }

  function addClientNotString() {
    tests = [
      '',
      1,
      []
    ];
    tests.forEach((test) => {
      it (`create suppliers from ${test}`, function() {
        const testSup = new ClientsLib().addClientRow(test);
        const expected = {
          clientList: []
        }
        assert.deepEqual(testSup, expected);
      })
    })
  }

  addClientString();
  addClientNotString();
});

describe('class ClientsLib', function() {
  var tests;
  function addClientNotString() {
    tests = [
      '',
      1,
      []
    ];
    tests.forEach((test) => {
      it (`create suppliers from ${test}`, function() {
        const testSup = new ClientsLib().addClientRow(test);
        const expected = {
          clientList: []
        }
        assert.deepEqual(testSup, expected);
      })
    })
  }
})

describe('mainFunc', function() {
  it (`order1`, function() {
    data.refreshClientsBase();
    data.setSuppliers(['A', 'B', 'C', 'D']);
    data.setItems(['a', 'b', 'c']);

    var clients = data.getClients();
    var client1 = clients.addClient('client1');
    var client2 = clients.addClient('client2');
    var client3 = clients.addClient('client3');

    client1.makeOrder('A', ['a', 'b']).makeOrder('B', ['a', 'b']);
    client2.makeOrder('C', ['a']).makeOrder('B', ['b', 'c']);
    client3.makeOrder('B', ['a']).makeOrder('D', ['b', 'c']);

    var expected = new Order([
      ['A', ['a', 'b']],
      ['B', ['a', 'b', 'c']],
      ['C', ['a']],
      ['D', ['b', 'c']]
    ]);

    const resultList = data.formOrder().getOrder();
    assert.deepEqual(resultList, expected);
  })

  it (`order2`, function() {
    data.refreshClientsBase();
    data.setSuppliers(['A', 'B', 'C', 'D']);
    data.setItems(['a', 'b', 'c']);

    var clients = data.getClients();
    var client1 = clients.addClient('client1');
    var client2 = clients.addClient('client2');
    var client3 = clients.addClient('client3');

    client1.makeOrder('A', ['a', 'b']).makeOrder('B', ['c', 'b']);
    client2.makeOrder('C', ['b', 'c']).makeOrder('B', ['a']);
    client3.makeOrder('B', ['a']).makeOrder('D', ['c', 'a']);

    var expected = new Order([
      ['A', ['a', 'b']],
      ['B', ['a', 'b', 'c']],
      ['C', ['b', 'c']],
      ['D', ['a', 'c']]
    ]);

    const resultList = data.formOrder().getOrder();
    clients.informClients();
    assert.deepEqual(resultList, expected);
  })

  it (`order3`, function() {
    data.refreshClientsBase();
    data.setSuppliers(['A', 'B', 'C', 'D', 'E']);
    data.setItems(['a', 'b', 'c']);

    var clients = data.getClients();
    var client1 = clients.addClient('client1');
    var client2 = clients.addClient('client2');
    var client3 = clients.addClient('client3');
    var client4 = clients.addClient('client4');
    var client5 = clients.addClient('client5');
    var client6 = clients.addClient('client6');

    client1.makeOrder('B', ['c', 'b']);
    client2.makeOrder('C', ['b', 'c']).makeOrder('E', ['a']);
    client3.makeOrder('B', ['a']).makeOrder('D', ['c', 'a']);
    client4.makeOrder('D', ['a']).makeOrder('A', ['a']);
    client5.makeOrder('B', ['a', 'c']);
    client6.makeOrder('C', ['c']).makeOrder('E', ['b', 'a']);

    var expected = new Order([
      ['A', ['a']],
      ['B', ['a', 'b', 'c']],
      ['C', ['b', 'c']],
      ['D', ['a', 'c']],
      ['E', ['a', 'b']]
    ]);

    const resultList = data.formOrder().getOrder();
    clients.informClients();
    assert.deepEqual(resultList, expected);
  })
})
