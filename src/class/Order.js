class Order {
  constructor(arr) {
    arr.forEach((i) => {
      const [sup, items] = i;
      this[sup] = items;
    })
  }
}

export default Order;
