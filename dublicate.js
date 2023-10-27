const friendsName = ["shajib","tipu", "sayem", "shajib", "sharif", "tipu", "srabon", "sharif", "shafikul", "monir", "tipu", "sharif"];
console.log(friendsName);
function isDublicate(names){
    const array = [];
    for(let i = 0; i < names.length ; i++){
        const element = names[i];
        if(array.includes(element) === false){
            array.push(element);
        }
    }
    return array;
}
const result = isDublicate(friendsName);
console.log(result);