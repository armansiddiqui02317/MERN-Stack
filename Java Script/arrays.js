//Array

const arr = ['hee', 232, false, null];

console.log(Array.isArray(arr));


const movies = ['Dhurandhar', 'avengers', 'jaani dushman', 'Veerana', 'Silent Voice'];

console.log(movies.length);



//indexing 

console.log(movies[4]);

console.log(movies[2]);

console.log(movies.at(-2));

console.log(movies.indexOf('Silent Voice'));

console.log(movies.at(0));

movies[2] = 'Bajarangi Bhaijaan';
console.log(movies);


//slicing 


console.log(movies.slice(1, 4));
console.log(movies.slice(-2,));
console.log(movies.slice(3, 20));





// movies.splice( 3, 2 ) // Removes 2 elements from index 3
console.log(movies);


// movies.splice(3, 2, 'Superman' , 'Flash')// Replacing elements

movies.splice(3, 0, 'Superman' , 'Flash')// Insert Elements
console.log(movies);




