import { suppliers, items, clients } from '../src/data/database';
import Suppliers from '../src/class/Suppliers';
import ClientsLib from '../src/class/ClientsLib';
import ClientObject from '../src/class/ClientObject';
// import { getAllOrders } from '../src/function/getFunc';
// import formListForSuppliers from '../src/function/formFinalList';
const assert = require('assert');
// const { expect, assert } = require('chai');

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
        const testSup = new ClientsLib().addClient(test);
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
        const testSup = new ClientsLib().addClient(test);
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
        const testSup = new ClientsLib().addClient(test);
        const expected = {
          clientList: []
        }
        assert.deepEqual(testSup, expected);
      })
    })
  }

})
