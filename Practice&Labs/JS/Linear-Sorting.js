array=[3,10,-5,-2,7,9]
len=array.length
for(var i=0;i<len-1;i++){
    for(var j=i+1;j<len;j++){
        if(array[i]>array[j]){
            temp=array[j]
            array[j]=array[i]
            array[i]=temp
        }
    }
}
console.log(array)