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