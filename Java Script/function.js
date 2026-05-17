function addNums(a,b){

    var c = a+b;
    console.log(c);
};
addNums(43, 89);
//

const getAvg = function(m1=23,m2=44,m3=32){
    const avg = (m1+m2+m3)/3;
    // console.log(avg);
    return avg;

};
const result = getAvg(43,23,44);
console.log(result);
console.log(getAvg());



const factorial = ( n ) => { 
    f  = 1;
    for (let i = 1; i <= n; i++){
        f *=i

    }
    return f;

 };
 console.log(factorial(7));



 //ccreate  a function to print the sum of first n natural numbers
 //create a func to check if a number is divisble by 7
 ///create a func to print fibonacchi series of given numbers 


 const sum = (n) => {
  let a = 0;
  for (let i=1;i<=n;i++) {
    a +=i;
  }
  return a;
};

console.log(sum(3));



