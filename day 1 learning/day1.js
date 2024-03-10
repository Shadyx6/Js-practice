// var conversion = (a) => {
//     let formula = ((a - 32) * 5) / 9;
//     formula = formula + " Degree C"
//     console.log(formula)
//   };
//   conversion(68)

// var evenorOdd = a => {
//     if(a % 2 === 0) {
//         console.log('even')
//     }
//     else{
//         console.log('odd')
//     }
// }
// evenorOdd(99)
// var fizzbuzz = () => {
   
//     for (let i = 1; i <100; i++) {
//         let num = ''
//         if(i % 3 === 0){
//             num += 'Fizz'
//         }
//         if(i % 5 === 0){
//             num += 'Buzz'
//         }
//         if(!num){
//             num = i
//         }
//         console.log(num)
//     }
    
    
// }
// fizzbuzz()

function charcount(){
    let input =  document.querySelector('input')
    input.addEventListener('input', () => {
        for (let i =0; i<1; i++){
            let display = document.querySelector('p')
            let getstring = input.value
            let count = getstring.length
            display.textContent = count
        }
    })
}
charcount()
// EXAMPLE OF STRING METHODS:
// let s1 = "hey"
// let s2 = "braza"
// let example = s1.concat(' ', s2)
// console.log(example)

// let s3 = 'javaScript is fun'
// let exapmleofSubstring = s3.substring(4, 10)
// console.log(exapmleofSubstring)

// function(){
//     let display = document.querySelector('p')
//     for (let i = 0; i < 1; i++){
//         let getstring = input.value
//         let count = getstring.length
//         display.textContent = count
//         console.log(count)

