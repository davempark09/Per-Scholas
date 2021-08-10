// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. 

var prompt=require('prompt-sync')();
var n1=Number(prompt('First Number '));
var n2=Number(prompt('Second Number '));
maxOfTwoNumbers = (num1,num2) => Math.max(num1, num2)
console.log(maxOfTwoNumbers(n1, n2))



// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.

var prompt=require('prompt-sync')();
var n1=Number(prompt('First Number Choice '));
var n2=Number(prompt('Second Number Choice '));
var n3=Number(prompt('Third Number Choice '));
maxOfThree = (num1,num2,num3) => Math.max(num1, num2,num3)
console.log(maxOfThree(n1,n2,n3))



// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. 
// For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.

var prompt=require('prompt-sync')();
var amt=prompt('Amount of Numbers: ')
const arr=[]
for (i=1;i<=amt;i++){
    var n1=Number(prompt('Please Give A Number: '));
    arr.push(n1)
}   
sumArray = (num1) => {
    let sum = 0
    for(let y=0;y<num1.length;y++) {
        sum += num1[y]
    }
    return sum;
}
multiplyArray = (num2) => {
    let mult = 1
    for(let x=0;x<num2.length;x++){
    mult *= num2[x]
    }
    return mult;
 }
    console.log("The numbers add to " + sumArray(arr) + " and they multiply to " + multiplyArray(arr))


