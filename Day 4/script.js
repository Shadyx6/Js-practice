// // Callback  Hell problem:

// function getData(dataID, nextdata) {
//     setTimeout(() => {
//         console.log('Data',dataID)
//         if (nextdata) {
//             nextdata()
//         }
//     }, 2000)
// }

// // Callback hell problem(creating a pramid structure) 
// getData(1, () => {
//     getData(2, () => {
//         getData(3, () => {
//             getData(4)
//         }
//     )})
// })

// promises(Promises are created to fix Callback hell)
// function getData(dataID, nextdata) {
//     return new Promise((resolve, reject)=> {
//         setTimeout(() => {
//             console.log('Data',dataID)
//             resolve('success')
//             if (nextdata) {
//                 nextdata()
//             }
//         }, 5000)
//     })
    
// }

// some example of Promise.then: 

// // example 1(using one data)
// function async(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('Data1')
//             resolve('success')
//         }, 4000);
//     })
// }
// console.log('fetching data1.....')
// let p1 = async()
// p1.then((res) => {
//     console.log(res) // this means that the resolve will be printed i.e success
// });


// Example 2 : (using two data)
// function async1(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('Data1')
//             resolve('success')
//         }, 4000);
//     })
// }
// console.log('fetching data1.....')
// function async2(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('Data2')
//             resolve('success')
//         }, 4000);
//     })
// }
//  async1().then((res)=> {
//     console.log('fetching data2')
//     async2().then((res) => {})
//  });

// Async and Await functions-

// // Basic Example:
// async function api(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('Weather Data')
//             resolve('done')
//         }, 2000);
//     })
// }

// async function fetchAPI(res){
//     await api();
//     await api()
// }

// // fixing the promise chain problem -

// function getData(dataID) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('Data',dataID)
//             resolve(200)
//         }, 2000)
//     })
// }
// async function getallData(){
//     console.log('fething data 1.....')
//     await getData(1);
//     console.log('fething data 2.....')
//     await getData(2);
//     console.log('fething data 3.....')
//     await getData(3);
// }

// memorize iife as well: Syntax-
// (function)();

// // an example of function using Promise:

// function MyBirthday(isjacobsick){
//     return new Promise((resolve,  reject) => {
//         setTimeout(() => {
//             if(!isjacobsick) // Meaning that when a user passes false in calllback, like- Mybirthday(false) so the if statement would be if(!false), which equals to true 
//             {
//                 resolve(2) // you will have 2 gifts
//             } 
//             else{
//                 reject(new Error('I got no gifts'))
//             }
//         }, 2000);
//     })
// }
// MyBirthday(false)
// .then((res) => {
//     console.log(res)
// })
// .catch((Error) => {
//     console,log(Error)
// })
// .finally(() => {
//     console.log('Party!') // regardless of  the gifts or function this will be executed that is PARTY!
// })

// Async and Await Function with fetching Simple API-

async function FetchAPI(){
    try{
        const response = await fetch('https://api.weatherbit.io/v2.0/current?&city=Bhopal,India&key=eba8fec5175e40cd8b6f53c923a9a182')
        console.log('fetching data.....')
        const data = await response.json()
        console.log(data.data[0].temp) // bike data
    }
    catch(error){
        console.log('error fetching data')
    }

}

FetchAPI()