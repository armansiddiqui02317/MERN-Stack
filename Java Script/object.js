const user = {
    name : 'Raju',
    email : 'raju@gmail.com',
    age : 30

     
};
console.log(user);



console.log(user.email );
console.log(user['name']);


user.age = 23;
console.log(user);




console.log(Object.keys(user));
console.log(Object.values(user));


const smartphone = {
    brand: 'Apple',
    model: 'iphone',
    price: 150000,
    colors: ['gray', 'cosmic orange', 'white']
};

// access full object
console.log(smartphone);

// access 2nd color
console.log(smartphone.colors[1]);

// add new color
smartphone.colors.push('black');

smartphone.colors[1] = 'gold';

smartphone.price = 140000;

console.log(smartphone);


// update price
// replace 2nd color



