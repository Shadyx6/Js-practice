// Problem  1: Arrow Function Practice:
function multiply(a, b) {
    return a * b;
}
console.log(multiply(10, 8))

let multiplyArrow = (a, b) => (a * b)
console.log(multiplyArrow(8, 10))

// Problem 2: Calculate the result of the following expression using an arrow function:

let Calculate = (a, b) => {
    let c = 5;
    return (a + b) * c;
}
console.log(Calculate(2, 3))

// Problem 3: Create an arrow function called getGreeting that takes no parameters and returns the string "geeksforgeeks".

let greets = a => 'greeksforgreeks'
console.log(greets())

// Problem 4: Given an array of strings, use the map() function along with an arrow function to find the length of each string. Store the lengths in a new array.

let arr = ['hey', 'hello', 'how', 'you', 'doin']

var lengthFinder = arr.map(a => a.length)
console.log(lengthFinder)

// Problem 5: Write a JavaScript program that takes an array of objects and converts it into a comma-separated value (CSV) string containing only the specified columns.

let data = [
    {name:'sara', age:25, city:"SouthLake"},
    {name: 'ismail', age:22, city: 'baghdad'}
]
let stocsv = data.map(a => `${a.name},${a.city}` )
let csv = stocsv.join('\n')
console.log(csv)

// problem 6: Target a Value in a Nested JSON Object:

const nestedData = {
    user: {
        info: {
            name: 'John',
            age: 28,
            address: {
                city: 'Chicago',
                zip: '60601',
            },
        },
    },
};
// Target the value of 'zip' using the key 'address'
var valuegetter = nestedData.user.info.address.zip
console.log(valuegetter) // Output: "60601"

// Problem:7 Calculate the Sum of Even Numbers:
const numbers = [1, 2, 3, 4, 5, 6];

var reduced = numbers.reduce((total, currentValue) => {
    if(currentValue % 2 === 0){
        return total + currentValue;
    }
    else{
        return total
    }
}, 0)
console.log(reduced) // Output: 12


// Problem:8 Convert Bytes to Human-Readable String:
const fileSizeInBytes = 1234567;
function converter(num){
   let c = num / 1000000 + ` M.B `
   return c;
}
console.log(converter(fileSizeInBytes))


// Problem 9: Create a Pluralization Function-
function pluralize(word, num){
    if(num <= 1){
        return word
    }
    else{
        return word + 's'
    }
}
let result = pluralize('Apple',5)
console.log(result) 