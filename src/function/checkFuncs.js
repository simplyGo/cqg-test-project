import  { items } from '../data/database';

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

export { hasItem, hasSupplier };
