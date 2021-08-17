// Part 1: Model a vending machine
// -a vending machine is an object
// -it has an array of snacks (make 3 snacks)
// -snacks are objects that have a name and a price
// -a vending machine has a function vend that allows user to enter the array position (a number) of the snack and then that snack will be returned
// -Be able to call vendingMachine.vend() with a valid integer to return a snack

// var prompt=require('prompt-sync')();
// var inp=prompt('Which Snack Do You Want (1-3): ')
// var act = (inp-1)
// const snack1 = {
//     name: "Cheetos",
//     price: 1.50
// }
// const snack2 = {
//     name: "Doritos",
//     price: 1.75
// }
// const snack3 = {
//     name: "Lays",
//     price: 1.25
// }
// var arr= [snack1, snack2, snack3]
// const vendingMachine = {
//     vend: function (x) {
//             return arr[x]
//     }
// }
// console.log(vendingMachine.vend(act))


// Part 2: Organize the number of characters in a string
// -write a function that takes a string as argument and returns an object
// -the keys of the returned object are characters that occur in the string
// -the values are the number of occurrences for each letter regardless of case
// -for example, calling the function with the string "apple": { a: 1, p: 2, l: 1, e: 1 }

var prompt=require('prompt-sync')();
var str=String(prompt('Which String Would You Like To Test: '));
var sortAlphabets = function(text) {
    return text.split('').sort();
};
var str2 = sortAlphabets(str)

const test = {
    
    organize: function(dif) {   
        for (i=0;i<dif.length;i++){
            if(dif[i]==dif[i++]){

            }
            else{
                
            }
            
        } 
    }
}
console.log(test.organize(str2))





