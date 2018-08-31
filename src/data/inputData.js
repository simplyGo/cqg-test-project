import readlineSync from 'readline-sync';
import { getSuppliers, getItems } from '../function/getData';
import { testSuppliersList, testItemsList } from './testData';

const suppliersList = testSuppliersList || getSuppliers(readlineSync.question('Enter list of suppliers(comma-separated variable)'));
const itemsList = testItemsList || getItems(readlineSync.question('Enter list of items(comma-separated variable)'));

export { suppliersList, itemsList };
