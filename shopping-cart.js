const shoppingCart = [
    {name:"shoes", price:1200},
    {name:"shirt", price:2200},
    {name:"pant", price:3700},
    {name:"belt", price:500}
]

function shoppingPrice (cart){
    let total = 0;
    for (let i = 0; i < cart.length; i++ ){
        const element = cart[i];
        console.log(element);
        total = total + cart[i].price;
    }
    return total;
}
const totalPrice = shoppingPrice(shoppingCart);
console.log( "total price is:", totalPrice);