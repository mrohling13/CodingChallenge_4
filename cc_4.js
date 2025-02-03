// Task 1: If Statements
let purchaseAmount = 200; // amount of purchase
let finalAmount = purchaseAmount; // Final amount after discount

if (purchaseAmount > 100) {
    finalAmount = purchaseAmount * 0.9; // 10% discount
    console.log('Discount applied')
}

console.log(`Final amount after discount: $${finalAmount}`);

