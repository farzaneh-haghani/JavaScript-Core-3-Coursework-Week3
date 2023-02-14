let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];

receipt(order);


function receipt(orderList) {
  let total = 0;
  console.log(`${"QTY".padEnd("20")}${"ITM".padEnd("20")}Total`);
  order.forEach(eachItem => {
    const { itemName, quantity, unitPrice } = eachItem;
    const sum = quantity * unitPrice;
    console.log(`${quantity.toString().padEnd("20", " ")}${itemName.padEnd("20")}${sum.toFixed(2)}`);
    total += sum;
  })
  console.log(`TOTAL: ${total}`);
}
