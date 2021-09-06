// for (r=1;r<=5;r++){ 
//     for (c=1;c<=5;c++){
//         process.stdout.write(r.toString())
//     } console.log()
// }

// for (r=1;r<=5;r++){
//     for (c=1;c<=r;c++){
//         process.stdout.write(c.toString())
//     } console.log()
// }

// for (r=5;r>=1;r--){
//     for (c=1;c<=r;c++){
//         process.stdout.write(r.toString())
//     } console.log()
// }

// for (r=5;r>=1;r--){
//     for (c=1;c<=r;c++){
//         process.stdout.write(c.toString())
//     } console.log()
// }

// for(r=1;r<=20;r++) {
    //     for (c=1;c<=20;c++) {
        //         console.log(c)
        //     } 
        //     console.log() 
        //     break;
        // }
        
// for (let r=1;r<=20;r++) if(r%2==0){
//     for (let c=4;c<r-1;c++) if(r%c!=0){
//         process.stdout.write(r.toString()); console.log("Prime") 
//         break;
//     }
//     for (let r=1;r<=20;r++) if(r%2!=0) {
//     for (let c=4;c<r-1;c++) if(r%c!=0) {
//         process.stdout.write(r.toString()); console.log("Prime")
//         break;
//     }
//         process.stdout.write(r.toString()); console.log("Odd")
//         break;
//     }
//         process.stdout.write(r.toString()); console.log("Even")
//     }

for (let r=1;r<=20;r++) {
    for(let c=1;c<=r;c++){
        if(c%2==0){
            if(r%c!=0) {console.log(r, "Prime")}
        console.log(r, "Even")
        }
        else if(c%2!=0){
            if(r%c!=0) {console.log(r, "Prime")}
        console.log(r, "Odd")}
    }
}