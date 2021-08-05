var prompt=require('prompt-sync')();
var n=prompt('Number to search for');
var array=[1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9];
found=false
for(let i=0;i<array.length;i++){
    if(n==array[i]){
        console.log("Number " + n + " found in " + (i+1) + " position.");
        found=true
        break;
    }
}
    if(found==false){
    console.log("Number " + n + " was not found.");
    }

//     var prompt=require('prompt-sync')();
// var n=prompt('Number to search for');
// var array=[9,2,5,1,8,6,9,2,5,4,6,8,3,1,6,4,8,4];
// found=false
// for(let i=0;i<array.length;i++){
//     if(n==array[i]){
//         console.log("Number " + n + " found in " + (i+1) + " position.");
//         found=true
//     }
// }
//     if(found==false){
//     console.log("Number " + n + " was not found.");
//     }