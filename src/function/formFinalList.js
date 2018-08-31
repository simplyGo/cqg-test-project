import { suppliers, clients } from '../data/database';
import { deleteDublicate } from './correctList';

function formListForSuppliers(orderList) {
  const list = orderList.reduce((acc, client) => {
    clients.getClient(client).getOrder().forEach((i) => {
      acc.push(i);
    });
    return acc;
  }, []);
  list.forEach((i) => {
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
    return [i, suppliers.getSupplier(i).sort()];
  })
}

export default formListForSuppliers;
