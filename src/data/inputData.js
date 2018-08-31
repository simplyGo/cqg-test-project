import readlineSync from 'readline-sync';
import { getSuppliers, getItems } from '../function/getData';

// [] как заглушка

const suppliersList = [] || getSuppliers(readlineSync.question('Enter list of suppliers(comma-separated variable)'));
const itemsList = [] || getItems(readlineSync.question('Enter list of items(comma-separated variable)'));

export { suppliersList, itemsList };
