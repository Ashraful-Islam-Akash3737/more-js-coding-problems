// find out the cheapest phone of an object using function
const allPhone = [
    {name: "xiaomi", camera:12, storage:"32gb", price:30000, color:"silver"},
    {name: "realme", camera:10, storage:"32gb", price:36000, color:"silver"},
    {name: "samsung", camera:12, storage:"32gb", price:32000, color:"silver"},
    {name: "oppu", camera:10, storage:"32gb", price:25000, color:"silver"},
    {name: "nokia", camera:12, storage:"32gb", price:20000, color:"silver"},
    {name: "howeie", camera:12, storage:"32gb", price:40000, color:"silver"},
]
   
function cheapestPhone (phones){
    let cheapest = phones[0];
    for(let i = 0; i < phones.length; i++ ){
        const phone = phones[i];
        console.log(phone);
        if (phone.price < cheapest.price){
            cheapest = phone;
        }
    }
    return cheapest;
}
const cheapestPhoneIs = cheapestPhone(allPhone);
console.log(cheapestPhoneIs);