var prompt=require('prompt-sync')();
var z=Number(prompt('How Many Elements To Run: '));
arr = []
for(i=0;i<z;i++){
    if (z>0){
        var c=(prompt('Elements to run through '));
        arr.push(c)
        continue;
    }
    else {
        break;
    }
}
console.log(arr)