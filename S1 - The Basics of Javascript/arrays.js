// Arrays -> Relate to arrays as the list of values/data.
// Are the variables that can store multiple values.


const friends = ['Sam', 'John', 'Ron']
console.log(friends)

const fruits = ['Apple', 'Mango', 'Banana'];
console.log(fruits);

let firstPerson = ["Sammy", 18, false];

// Add to list
friends.push('Harry');
console.log(friends);

// The unshift() method is used to add one or multiple elements to the beginning of an array
friends.unshift(firstPerson);
console.log(friends);

// // The shift() method is used to erase one or multiple elements to the beginning of an array
friends.shift();
console.log(friends);

console.log(friends.length);
console.log(friends[0]);

console.log(Array.isArray(friends));

const names = new Array('Alex', 'Daniel', 'Sylvia');
console.log(names);