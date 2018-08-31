import Suppliers from '../class/Suppliers';
import { suppliersList, itemsList } from './inputData';
import ClientsLib from '../class/ClientsLib';

const suppliers = new Suppliers(suppliersList);
const items = itemsList;
const clients = new ClientsLib();

export { suppliers, items, clients }
