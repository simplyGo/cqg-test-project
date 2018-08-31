import { suppliers } from '../data/database';
import { deleteDublicate } from './correctList';

function formListForSuppliers(orderList) {
  orderList.forEach((i) => {
    const [sup, supItems] = i;
    supItems.forEach((i) => {
      suppliers.getSupplier(sup).push(i);
    })
  });

  suppliers.getSuppliersList().forEach((sup) => {
    const thisSupplier = suppliers.getSupplier(sup);
    suppliers.addSupplierItems(sup, deleteDublicate(thisSupplier));
  });
  return suppliers.getSuppliersList().map((i) => {
    return [i, suppliers.getSupplier(i)];
  })
}

export default formListForSuppliers;
