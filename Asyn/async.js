const promise1 = new Promise ((resolve,reject)=>{
    // resolve(["Javascript","Java"]);
    reject("API Failed!")
});



// promise1.then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err)
// });


// async function fetchData(){
//     const response = await promise1;
//     console.log(response);
    
// };

// const fetchData = async () => {
//     const response = await promise1.catch((err)=>{
//         console.log(err);
//     });
//     if(response){
//         console.log(response);
//     }
//     // console.log(response);
    
// };

// fetchData();

// IIFE

// (async ()=>{
//     const response = await promise1;
//     console.log(response);
// })();


// const fetchData = async () => {
//  try{

//     const response = await promise1;
//     console.log(response);

//  } catch (err){
//     console.log(err)
//  }
    
// };

// fetchData();









// const fetchApiData = async() => {
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))
// };

// fetchApiData()