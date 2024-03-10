// Functions using map:
let arrofstrings = ['shutup', 'dumbass', 'heleny', 'trial', 'delta']
var len = arrofstrings.map(a => a.length)
console.log(len)

// 10 basic functions using Filter:

// Filter even numbers
let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
var copy = arr.filter(a => (a % 2 === 0))
console.log(copy)

// Filter positive numbers
let arr1 = [1,-1,-2,-6,-7,4,5,7,2,-111,-10,34,55,67]
var posarr = arr1.filter( a => (a > 0))
console.log(arr1)
console.log(posarr)


// Filter words lesss than length of 5
let arr2 = ['apple', 'banana', 'orange', 'mango', 'Kiwi', 'pineapple', 'Pine', 'Shad', 'Hey', 'I']
let wordarr = arr2.filter( a => a.length <= 4)
console.log(wordarr)


// filter the words with even length
let arr3 = ["hello", "world", "code", "javascript", "filter"]
let specificarr = arr3.filter(function (a){
    var length = a.length
    if(length %  2 === 0){
        return true
    }
})
// with arrow function 
let specarr = arr3.filter(a => a.length % 2 === 0)
console.log(specificarr)
console.log(specarr)

// filter the words if they r prime
let arr4 = [2, 3, 5, 7, 10, 11, 13]
function isprime(num){
    if(num <= 1){
        return false
    }
    for (let i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0){
            return false
        }
    }
    return true
}
let primearr = arr4.filter(isprime)
console.log(primearr)

let arr5 = [1, 2, 2, 3, 4, 4, 5, 5, 7, 6, 9 ,9 ,9 ,9]
function removeDuplicates(a) {
    return a.filter(function (elem, index, array) {
        return array.indexOf(elem) === index
    })
}
let filterr = removeDuplicates(arr5)
console.log(filterr) 

// attempt with arrow 
var remove = a => a.filter((elem,index,arr) => {
    return arr.indexOf(elem) === index
})
 let filter = remove(arr5)
 console.log(filter)

 // In arrow function Explicit return is made when u may wannna use curly braces !imprtant