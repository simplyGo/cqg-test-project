import initConfig from './config'; // load database

const clientsLib = function() {
  const data = initConfig();
  const orders = data.formOrder();
  console.log(orders);
  // data.getClients().informClients();
}

export default clientsLib;
