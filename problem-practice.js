// problem practice 1
// convert inch  to feet

// function inchToFeet (inch){
//    let feet = inch / 12;
//    return feet;  
// }
// const result = inchToFeet(129);
// console.log(result);




// problem practice 2
// convert centimeter  to meter
function centimeterToMeter(centimeter) {
    let meter = centimeter / 100;
    return meter;
}
const result = centimeterToMeter(780);
console.log(result);

// problem practice 3
// count paper:---------------quantity and total page
//   book1 = 100 page;
//   book2 = 200 page;
//   book3 - 300 page;
function paperRequirements(book1Quantity, book2Quantity, book3Quantity) {
    const book1 = 100;
    const book2 = 200;
    const book3 = 300;
    const totalPageOfBook1 = book1Quantity * book1;
    const totalPageOfBook2 = book2Quantity * book2;
    const totalPageOfBook3 = book3Quantity * book3;

    const totalPageOfAllBook = totalPageOfBook1 + totalPageOfBook2 + totalPageOfBook3;
    return totalPageOfAllBook;

}
const totalPage = paperRequirements(6, 3, 2);
console.log(totalPage);


// problem practice 4
// ["shajid", "mamun", "kamal", "jubayer bin rased", "chinto"]------array.length find the largest name
const array = ["shajid", "mamun", "kamal", "jubayer bin rased", "chinto"];
function bestFriend(arr) {
    let result = arr[0];
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        // console.log(element);
        if (result.length < element.length) {
            result = element;
        }
    }
    return result;
}
const bestFriendIs = bestFriend(array);
console.log(bestFriendIs);

// problem practice 5
// [45, 57, 69, 27, -56, 78, 68]--------when negetive number break and print
const numbers = [45, 57, 69, 27, -56, 78, 68];
function onlyPositive(arr) {
    let result =[];
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if(element < -1){
            // result.push(element);
            break;
            
        }
        result.push(element);
    }

    return result;
}
const output = onlyPositive(numbers);
console.log(output);