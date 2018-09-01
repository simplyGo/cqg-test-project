import initConfig from '../src/config';
import Suppliers from '../src/class/Suppliers';
import ClientsLib from '../src/class/ClientsLib';
import ClientObject from '../src/class/ClientObject';
import Order from '../src/class/Order';
const assert = require('assert');

const data = initConfig();

describe('mainFunc', function() {
  it (`order1`, function() {
    data.clearDatabase()
        .setSuppliers(['A', 'B', 'C', 'D'])
        .setItems('A',['a', 'b', 'c'])
        .setItems('B',['a', 'b', 'c'])
        .setItems('C',['a', 'b', 'c'])
        .setItems('D',['a', 'b', 'c']);

    var clients = data.getClients();

    clients.addClient('client1')
           .makeOrder('A', ['a', 'b'])
           .makeOrder('B', ['a', 'b']);
    clients.addClient('client2')
           .makeOrder('C', ['a'])
           .makeOrder('B', ['b', 'c']);
    clients.addClient('client3')
           .makeOrder('B', ['a'])
           .makeOrder('D', ['b', 'c']);

    var expected = new Order([
      ['A', ['a', 'b']],
      ['B', ['a', 'b', 'c']],
      ['C', ['a']],
      ['D', ['b', 'c']]
    ]);

    const resultList = data.formOrder();
    assert.deepEqual(resultList, expected);
  })

  it (`order2`, function() {
    data.clearDatabase()
        .setSuppliers(['A', 'B', 'C', 'D'])
        .setItems('A',['a', 'b'])
        .setItems('B',['a', 'b', 'c'])
        .setItems('C',['a', 'c'])
        .setItems('D',['c']);

    var clients = data.getClients();

    clients.addClient('client1')
           .makeOrder('A', ['a', 'b'])
           .makeOrder('B', ['a', 'c']);
    clients.addClient('client2')
           .makeOrder('D', ['c']);

    var expected = new Order([
      ['A', ['a', 'b']],
      ['B', ['a', 'c']],
      ['D', ['c']]
    ]);

    const resultList = data.formOrder();
    assert.deepEqual(resultList, expected);
  })

  it (`order3`, function() {
    data.clearDatabase()
        .setSuppliers(['A', 'B', 'C', 'D'])
        .setItems('A',['a', 'b'])
        .setItems('B',['a', 'c', 'd'])
        .setItems('C',['a', 'c'])
        .setItems('D',['c', 'e']);

    var clients = data.getClients();

    clients.addClient('client1')
           .makeOrder('A', ['a', 'b'])
           .makeOrder('B', ['a', 'c']);
    clients.addClient('client2')
           .makeOrder('C', ['c']);
    clients.addClient('client3')
           .makeOrder('B', ['d'])
           .makeOrder('C', ['a', 'c']);
    clients.addClient('client4')
           .makeOrder('A', ['b'])
           .makeOrder('D', ['e']);
    clients.addClient('client5')
           .makeOrder('D', ['c']);

    var expected = new Order([
      ['A', ['a', 'b']],
      ['B', ['a', 'c', 'd']],
      ['C', ['a', 'c']],
      ['D', ['c', 'e']]
    ]);

    const resultList = data.formOrder();
    assert.deepEqual(resultList, expected);
  })

  it (`order4 error`, function() {
    data.clearDatabase()
        .setSuppliers(['A', 'B', 'C', 'D'])
        .setItems('A',['a', 'b'])
        .setItems('B',['a', 'c', 'd'])
        .setItems('C',['a', 'c'])
        .setItems('D',['c', 'e']);

    var clients = data.getClients();

    clients.addClient('client1')
           .makeOrder('A', ['a', 'b'])
           .makeOrder('B', ['a', 'c']);
    clients.addClient('client2')
           .makeOrder('C', ['c']);
    clients.addClient('client3')
           .makeOrder('B', ['d'])
           .makeOrder('D', ['a', 'c']);

    var expected = new Error(`D doesn't have item [a]`);

    const resultList = data.formOrder();
    assert.deepEqual(resultList, expected);
  })

  it (`order5 error`, function() {
    data.clearDatabase()
        .setSuppliers(['A', 'B', 'C', 'D'])
        .setItems('A',['a', 'b'])
        .setItems('B',['a', 'c', 'd'])
        .setItems('C',['a', 'c'])
        .setItems('D',['c', 'e']);

    var clients = data.getClients();

    clients.addClient('client1')
           .makeOrder('E', ['a', 'b'])
           .makeOrder('B', ['a', 'c']);
    clients.addClient('client2')
           .makeOrder('C', ['c']);
    clients.addClient('client3')
           .makeOrder('B', ['d'])
           .makeOrder('D', ['a', 'c']);

    var expected = new Error(`E is not a supplier`);

    const resultList = data.formOrder();
    assert.deepEqual(resultList, expected);
  })

  it (`order6 error`, function() {
    data.clearDatabase();

    var expected = new Error(`A is not a supplier`);

    const resultList = data.setSuppliers([]).setItems('A', ['a', 'b']);

    assert.deepEqual(resultList, expected);
  })

  it (`order7 error`, function() {
    data.clearDatabase();

    var expected = new Error(`A is not Array`);

    const resultList = data.setSuppliers('A');

    assert.deepEqual(resultList, expected);
  })

  it (`order8 error`, function() {
    data.clearDatabase();
    let resultList;
    var expected = new Error(`You're trying to add non string item to supplier A`);

    resultList = data.setSuppliers(['A']).setItems('A', ['a', 1, 'b']);
    assert.deepEqual(resultList, expected);
  })

  it (`order9 error`, function() {
    let resultList;
    var expected = new Error(`Supplier name must be a string`);

    resultList = data.clearDatabase().setSuppliers(['A']).setItems(1, ['a', 1, 'b']);

    assert.deepEqual(resultList, expected);
    resultList = data.clearDatabase().setSuppliers(['A']).setItems([], ['a', 1, 'b']);
    assert.deepEqual(resultList, expected);
    resultList = data.clearDatabase().setSuppliers(['A']).setItems(undefined, ['a', 1, 'b']);
    assert.deepEqual(resultList, expected);
    resultList = data.clearDatabase().setSuppliers(['A']).setItems({}, ['a', 1, 'b']);
    assert.deepEqual(resultList, expected);
    resultList = data.clearDatabase().setSuppliers(['A']).setItems(null, ['a', 1, 'b']);
    assert.deepEqual(resultList, expected);
  })

  it (`order10 error`, function() {
    let resultList;
    var expected = new Error(`Supplier name must be a string`);

    resultList = data.clearDatabase().setSuppliers(['1', 3]);
    assert.deepEqual(resultList, expected);
    resultList = data.clearDatabase().setSuppliers(['A', undefined]);
    assert.deepEqual(resultList, expected);
    resultList = data.clearDatabase().setSuppliers(['A', []]);
    assert.deepEqual(resultList, expected);
    resultList = data.clearDatabase().setSuppliers([{}, '5']);
    assert.deepEqual(resultList, expected);
    resultList = data.clearDatabase().setSuppliers(['a', 'b', null]);
    assert.deepEqual(resultList, expected);
  })

  it (`order11 error`, function() {
    let resultList;
    var expected = new Error(`You're trying to add an empty string item to supplier A`);

    resultList = data.setSuppliers(['A']).setItems('A', ['a', '', 'b']);
    assert.deepEqual(resultList, expected);
  })
})
