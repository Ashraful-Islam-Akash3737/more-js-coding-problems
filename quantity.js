const shoppingCart = [
    { name: "shoes", price: 800, quantity: 3 },
    { name: "shirt", price: 1000, quantity: 7 },
    { name: "pant", price: 1300, quantity: 5 },
    { name: "belt", price: 500, quantity: 2 }
]
// ------------------------------------------------------------------------

// solution:1

function shoppingPrice(cart) {
    let total = 0;
    
    for (let i = 0; i < cart.length; i++) {
        const element = cart[i];
        console.log(element);

        // const shoesQuantity = cart[0].price * cart[0].quantity;
        // const shirtQuantity = cart[1].price * cart[1].quantity;
        // const pantQuantity = cart[2].price * cart[2].quantity;
        // const beltQuantity = cart[3].price * cart[3].quantity;
        // const totalQuantity = shoesQuantity + shirtQuantity + pantQuantity + beltQuantity;

        total = total + cart[i].price* cart[i].quantity;
    }
    return total;
}
const totalPrice = shoppingPrice(shoppingCart);
console.log("total price is:", totalPrice);



// ---------------------------------------------------------------




// solution:2

// function shoppingPrice(cart) {
//     let total = 0;
    
//     for (let i = 0; i < cart.length; i++) {
//         const element = cart[i];
//         const totalElement = element.price * element.quantity;

//         total = total + totalElement;

        
//     }
//     return total;
// }
// const totalPrice = shoppingPrice(shoppingCart);
// console.log("total price is:", totalPrice);