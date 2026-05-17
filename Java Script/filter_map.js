const nums = [4,6,3,1,8,9,2]








//WAP to create an arrat

sqrNums = nums.map((n) => {return n ** 2});

console.log (sqrNums);

//WAP to create an array containing numbers multiply by 10

nums2 = nums.map((n) => {return n * 10});
console.log(nums2)

//wap to filter all even numbers 

const evenNums = nums.filter ((n) => {return n%2===0});
console.log(evenNums);



const prices = [340, 550, 670, 1100, 390];
//filter all pric3es betwween 400 and 700

const priced = prices.filter((p) => {return p >= 400 && p <= 700});
console.log(priced);



const rawPrices = ['$450.23', '$4.99', '$12.4' , '$33.983'];
//showing output in integer using map [450 , 4 12 33]

const intPrices =rawPrices.map((p) => {
    return parseInt(p.slice(1));
});
console.log(intPrices);


