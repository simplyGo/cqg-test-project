# Before you start

use **make install** to install dependencies from npm
use **make start** to run lib after setting up config file

There's a config.js file in *src/* folder
>*../src/config.js*

Down below you can read how to configure this library

## How to configure?

Your config is a function so it starts with **const data = new Database()** and ends with **return data**
same to import/export and function

*ready to use config file looks like*
```
import Database from './class/Database';

function initConfig() {
  const data = new Database();

  data.setSuppliers(['A', 'B', 'C', 'D'])
      .setItems('A', ['a', 'b', 'c'])
      .setItems('B', ['a', 'b', 'c'])
      .setItems('C', ['a', 'b', 'c'])
      .setItems('D', ['a', 'b', 'c']);

  const clients = data.getClients();

  data.addClient('client1')
    .makeOrder('A', ['a', 'b', 'b', 'b'])
    .makeOrder('B', ['a', 'b']);
  data.addClient('client2')
    .makeOrder('C', ['a'])
    .makeOrder('B', ['b', 'c']);
  data.addClient('client3')
    .makeOrder('B', ['a'])
    .makeOrder('D', ['b', 'c']);

  return data;
};

export default initConfig;
```

You need to use database methods to configure library

use string names for clients, suppliers and items
otherwise it returns an error

### methods

 **data.clearDatabase()**
  returns new clean database

  use for writting test
  *example*
```
data.clearDatabase()
    .setSuppliers(['A', 'B', 'C', 'D'])
    .setItems('A',['a', 'b'])
    .setItems('B',['a', 'c', 'd'])
    .setItems('C',['a', 'c'])
    .setItems('D',['c', 'e']);
```

 **data.setSuppliers([...strings])**
  creates suppliers

  *example*
```
  data.setSuppliers(['A', 'B', 'C', 'D'])
```

 **data.setItems(supplier, [...items])**
  adds items to supplier

  *example*
```
  data.setItems('A', ['a', 'b', 'c'])
```

 **data.addClient(clientName)**
  returns client objec and its methods

  use it to form client order
  *example*
```
  data.addClient('client1').makeorder('A', ['a', 'b', 'c'])
```

 **data.formOrder()**
  returns order object and notify all clients about delivery

### making order

to make order you should get client object.

use **data.addClient(clientName)** or **data.getClient(clientName)**

then you can makeOrder for this client

use **.makerOrder(supplier, [...items])**

*example*
```
data.addClient('client1')
  .makeOrder('A', ['a', 'b', 'b', 'b'])
  .makeOrder('B', ['a', 'b']);
```

### config examples

```
const data = new Database();
data.setSuppliers(['A', 'B', 'C', 'D'])
    .setItems('A', ['a', 'b', 'c'])
    .setItems('B', ['a', 'b', 'c'])
    .setItems('C', ['a', 'b', 'c'])
    .setItems('D', ['a', 'b', 'c']);
const clients = data.getClients();
data.addClient('client1')
  .makeOrder('A', ['a', 'b', 'b', 'b'])
  .makeOrder('B', ['a', 'b']);
data.addClient('client2')
  .makeOrder('C', ['a'])
  .makeOrder('B', ['b', 'c']);
data.addClient('client3')
  .makeOrder('B', ['a'])
  .makeOrder('D', ['b', 'c']);
```


```
const data = new Database();
data.setSuppliers(['A', 'B', 'C', 'D'])
    .setItems('A',['a', 'b'])
    .setItems('B',['a', 'c', 'd'])
    .setItems('C',['a', 'c'])
    .setItems('D',['c', 'e']);

data.addClient('client1')
    .makeOrder('A', ['a', 'b'])
    .makeOrder('B', ['a', 'c']);
data.addClient('client2')
    .makeOrder('C', ['c']);
data.addClient('client3')
    .makeOrder('B', ['d'])
    .makeOrder('D', ['a', 'c']);
```
