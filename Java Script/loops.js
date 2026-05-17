// for loop

// for(let i = 0; i< 10; i++ ){
//     console.log(i);
// };





// password = 'babubanarasidas'

//  for(let p of password){
//     console.log(p);
// };


//while loop

// let a = 10;

// while(a<20){
//     console.log(a);
//     a++;
// }

// WAP to print all numbers divisble by 7 and 11 
// in range of 30 to 130


for(let i = 30; i<=130; i++){
    if (i % 7 === 0 && i % 11 === 0){
        console.log(i);
    }
}



let num = 10;
let prime = true;
for (let i=2; i<=num/2; i++){
    if(num%i ===2){
    prime = false;
    console.log('not prime ');
    break;
    }


}
if(prime) console.log('prime')


