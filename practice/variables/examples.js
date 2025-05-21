function calculateOrderTotal(orderItems) {
   if (!Array.isArray(orderItems)) {
       throw new Error("Order items must be an array.");
   }

   let total = 0;
   orderItems.forEach((item, index) => {
       console.log(`Processing item ${index + 1}:`, item);
       total += item.price * item.quantity;
   });

   console.log(`Order total: ${total}`);
   return total;
}

// Debugging in action
try {
   const order = [
      { price: 10, quantity: 2 },
     { price: 15, quantity: 1 },
   ];
   calculateOrderTotal(order); // Valid
} catch (err) {
   console.error(err.message);
}