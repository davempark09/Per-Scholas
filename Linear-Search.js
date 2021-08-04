var prompt=require('prompt-sync')();
var n=prompt('Number to search for ');
var x=0
var array=[9,2,5,1,8,6,9,2,5,4,6,8,3,1,6,4,8,4];
var position=[]
for(var i=0;i<array.length;i++){
    if(n==array[i]){
            x++
            position.push(i+1)  
    }
}    
    if(x>0){
    console.log('The number ' + n + ' was found ' + x + ' times in the the ' + position + ' position.');
}
    if(x==0){
    console.log("Number " + n + " was not found.");
    }

