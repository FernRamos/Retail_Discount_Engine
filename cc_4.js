// Step 2: Define 5 products
let products = [
  { name: "Laptop", category: "electronics", price: 1200, inventory: 10 },
  { name: "Sneakers", category: "footwear", price: 80, inventory: 25 },
  { name: "Smartphone", category: "electronics", price: 900, inventory: 5 },
  { name: "T-shirt", category: "apparel", price: 20, inventory: 100 },
  { name: "Coffee Maker", category: "home appliances", price: 60, inventory: 15 }
];

console.log("Initial Product List:");
console.log(products);

// Step 3: Apply category-based discounts using switch
for (let product of products) {
  let originalPrice = product.price;

  switch (product.category) {
    case "electronics":
      product.price *= 0.8;
      break;
    case "apparel":
      product.price *= 0.85;
      break;
    case "groceries":
    case "household":
      product.price *= 0.9;
      break;
    default:
      // No discount
      break;
  }
  product.price = parseFloat(product.price.toFixed(2));
  console.log(`${product.name} (${product.category}): Original $${originalPrice}, Discounted $${product.price}`);
}

// --- Step 4: Define customer type and discount function ---
function getCustomerDiscountRate(customerType) {
  if (customerType === "student") {
    return 0.05;
  } else if (customerType === "senior") {
    return 0.07;
  } else {
    return 0;
  }
}
// --- Step 5: Simulate checkout for 3 customers ---
for (let customerNum = 1; customerNum <= 3; customerNum++) {
  console.log(`\n--- Customer ${customerNum} Checkout ---`);

  // Generate a cart with 2 random products
  let cart = [];
  for (let i = 0; i < 2; i++) {
    let randomIndex = Math.floor(Math.random() * products.length);
    let selectedProduct = products[randomIndex];

    if (selectedProduct.inventory > 0) {
      cart.push(selectedProduct);
    }
  }

  // Random customer type
  let customerTypes = ["regular", "student", "senior"];
  let customerType = customerTypes[Math.floor(Math.random() * customerTypes.length)];

  // Calculate subtotal
  let subtotal = 0;
  for (let item of cart) {
    subtotal += item.price;
    item.inventory -= 1;
    console.log(`${item.name} - $${item.price.toFixed(2)} (Inventory left: ${item.inventory})`);
  }
   // Apply customer-type discount (from Step 4)
  let discountRate = getCustomerDiscountRate(customerType);
  let finalTotal = subtotal * (1 - discountRate);
  finalTotal = parseFloat(finalTotal.toFixed(2));

  console.log(`Customer Type: ${customerType}`);
  console.log(`Subtotal: $${subtotal.toFixed(2)}`);
  console.log(`Final Total after ${discountRate * 100}% discount: $${finalTotal}`);
}
// Step 6: Log key/value pairs for first product using for...in
console.log("\n--- Inspecting First Product ---");
let inspectedProduct = products[0];
for (let key in inspectedProduct) {
  console.log(`${key}: ${inspectedProduct[key]}`);
}
// Step 7: Log all products using Object.entries() + destructuring
console.log("\n--- Final Inventory and Prices ---");
for (let product of products) {
  console.log(`\nProduct: ${product.name}`);
  for (let [key, value] of Object.entries(product)) {
    console.log(`${key}: ${value}`);
  }
}