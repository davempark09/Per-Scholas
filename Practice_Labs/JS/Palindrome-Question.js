var prompt=require('prompt-sync')();
var c=String(prompt('Enter Characters To Be Tested '));

function palin(str){
    var srj = str.split("").reverse("").join("");
    for(i=0;i<str.length;i++){
        if(srj.toLowerCase()==str.toLowerCase()){
        return 'Palindrome'
        }
        else {
        return 'Not a Palindrome'
            }
        }
    }
result=palin(c)
console.log(result)