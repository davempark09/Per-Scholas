var prompt=require('prompt-sync')();
var c=Number(prompt('Menu Choice (1=Addition 2=Subtraction 3=Multiplication 4=Division 5=Average 6=Exit) '));

        if (c<6 && c>1){   
    var n1=Number(prompt('First Number Choice '));
    var n2=Number(prompt('Second Number Choice '));
    }
    
function Calc(num1,num2){
    
switch (c) {
    case 1:
        return (num1+num2)
    case 2:
        return (num1-num2)
    case 3:
        return (num1*num2)
    case 4:
        return (num1/num2)
    case 5:
        return (num1+num2)/2
    case 6:
        return('Goodbye')
    default: 
        return('Invalid Choice')

}
}
result=Calc(n1,n2)
console.log(result)


   