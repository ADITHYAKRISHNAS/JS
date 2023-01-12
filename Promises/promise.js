// // const promise = new Promise((resolve,reject)=>{
// //     // setTimeout(()=>{
// //     //     resolve("Successw!");
// //     // },3000);
// //     // resolve("Success!");
// //     reject("Failed!");

// // })

// // promise.then((response)=>{
// //     console.log(response);
// // }).catch((error)=>{
// //     console.log(error);
// //     // login
// // })



// function getDataFromAPI1(num){
//     // setTimeout(() =>{ 
//     //     callback(num)

//     // },1000);

//     return new Promise((resolve,reject)=>{
//         setTimeout(() =>{ 
//         resolve(num)
//         },1000);
//     })
// }

// function getDataFromAPI2(num){
//     // setTimeout(() =>{ 
//     //     resolve(num)

//     // },1000);
//     return new Promise((resolve,reject)=>{
//         setTimeout(() =>{ 
//         resolve(num)
//         },1000);
//     })
// }

// // getDataFromAPI1(5).then((response=>{
// //     // console.log(response);
// //     return getDataFromAPI2(response + 5);
// // }).then((response)=> {
// //     console.log(response);
// // }));

// getDataFromAPI1(5).then((response)=>{
//     return getDataFromAPI2(response +5);
// }).then((response)=>{
//     console.log(response);
// });

const promise1 = new Promise ((resolve,regect)=>{
    resolve(["Javascript","Java"]);
});


const promise2 = new Promise ((resolve,regect)=>{
    // resolve(["React","Angular"]);
    regect("Api failed!")
});

// promise1.then((res)=>{
//     console.log(res);
// });

// promise2.then((res)=>{
//     console.log(res);
// });

// const allPromise = Promise.all([promise1,promise2]);

// allPromise.then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err)
// });

// flat (infinity)


// const allPromise = Promise.allSettled([promise1,promise2]);

// allPromise.then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err)
// });

// const allPromise = Promise.any([promise1,promise2]);

// allPromise.then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err)
// });


const allPromise = Promise.race([promise1,promise2]);

allPromise.then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err)
});