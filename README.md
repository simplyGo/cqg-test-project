# Commands

use **make start** to rub lib

use **const data = new Database();** in your config file to create new database;

use string names for clients, suppliers and items
otherwise it returns an error

## methods

-ul **data.clearDatabase()**
  returns new clean database

  use for writting test
  >*example*
```
data.clearDatabase()
    .setSuppliers(['A', 'B', 'C', 'D'])
    .setItems('A',['a', 'b'])
    .setItems('B',['a', 'c', 'd'])
    .setItems('C',['a', 'c'])
    .setItems('D',['c', 'e']);
```

-ul **data.setSuppliers([...strings])**
  creates suppliers

  >*example*
```
  data.setSuppliers(['A', 'B', 'C', 'D'])
```

-ul **data.setItems(supplier, [...items])**
  adds items to supplier

  >*example*
```
  data.setItems('A', ['a', 'b', 'c'])
```

-ul **data.addClient(clientName)**
  returns client objec and its methods

  use it to form client order
  >*example*
```
  data.addClient('client1').makeorder('A', ['a', 'b', 'c'])
```

-ul **data.formOrder()**
  returns order object and notify all clients about delivery

## making order

to make order you should get client object.

use **data.addClient(clientName)** or **data.getClient(clientName)**

then you can makeOrder for this client

use **.makerOrder(supplier, [...items])**

>*example*
```
data.addClient('client1')
  .makeOrder('A', ['a', 'b', 'b', 'b'])
  .makeOrder('B', ['a', 'b']);
```

## config example

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
