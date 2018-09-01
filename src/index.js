import initConfig from './config'; // load database

const clientsLib = function() {
  const data = initConfig();
  data.formOrder();
}

export default clientsLib;
