// const promise = new Promise((resolve,reject)=>{
//     // setTimeout(()=>{
//     //     resolve("Successw!");
//     // },3000);
//     // resolve("Success!");
//     reject("Failed!");

// })

// promise.then((response)=>{
//     console.log(response);
// }).catch((error)=>{
//     console.log(error);
//     // login
// })



function getDataFromAPI1(num){
    // setTimeout(() =>{ 
    //     callback(num)

    // },1000);

    return new Promise((resolve,reject)=>{
        setTimeout(() =>{ 
        resolve(num)
        },1000);
    })
}

function getDataFromAPI2(num){
    // setTimeout(() =>{ 
    //     resolve(num)

    // },1000);
    return new Promise((resolve,reject)=>{
        setTimeout(() =>{ 
        resolve(num)
        },1000);
    })
}

// getDataFromAPI1(5).then((response=>{
//     // console.log(response);
//     return getDataFromAPI2(response + 5);
// }).then((response)=> {
//     console.log(response);
// }));

getDataFromAPI1(5).then((response)=>{
    return getDataFromAPI2(response +5);
}).then((response)=>{
    console.log(response);
});