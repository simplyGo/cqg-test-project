import Suppliers from '../class/Suppliers';
import ClientsLib from '../class/ClientsLib';
import { suppliersList, itemsList, clientsOrder } from '../../config.js'; // load data from config

let suppliers = new Suppliers(suppliersList);
let items = itemsList;
let clients = new ClientsLib();

// for Tests

function setSuppliers(arr) {
  suppliers = new Suppliers(arr);
}

function setItems(arr) {
  items = arr;
}

function refreshClientsBase() {
  clients = new ClientsLib();
}

export { suppliers, items, clients, setSuppliers, setItems, refreshClientsBase }
