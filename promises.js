/*
    promises are special "javascript" objects

    proper communication between "producer" and "consumer" also called as "promises"

    "producer" will generate the "promises"

    "consumer" will consume the "promises"

    producer will create promises by using "Promise" class.

    consumer consumes in two ways.

            1) then()

            2) async & await
*/


/*
    let promise1 = new Promise((resolve,reject)=>{
        resolve("tomarrow i will discuss dom manipulations");
    });


    promise1.then((posRes)=>{
        console.log(posRes);
    },(errRes)=>{
        console.log(errRes);
    });                             //tomarrow i will discuss dom manipulations
*/

/*
    let promise1 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("we will discuss dom manipulations in tomarrow sessions");
        },5000);
    });

    promise1.then((posRes)=>{
        console.log(posRes);
    },(errRes)=>{
        console.log(errRes)
    });                 //we will discuss dom manipulations in tomarrow sessions
*/

// let promise1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Hello_1");
//     },5000);
// });


// let promise2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Hello_2")
//     },10000);
// });

// let promise3 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Hello_3");
//     },15000);
// });

// promise1.then((posRes)=>{
//     console.log(posRes);
// },(errRes)=>{
//     console.log(errRes);
// });


// promise2.then((posRes)=>{
//     console.log(posRes);
// },(errRes)=>{
//     console.log(errRes);
// });


// promise3.then((posRes)=>{
//     console.log(posRes);
// },(errRes)=>{
//     console.log(errRes);
// });


/*
    let promise1 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Hello_1");
        },5000);
    });


    let promise2 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Hello_2")
        },10000);
    });

    let promise3 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Hello_3");
        },15000);
    });


    Promise.all([promise1,promise2,promise3]).then((posRes)=>{
        console.log(posRes);
    },(errRes)=>{
        console.log(errRes);
    });                 //[ 'Hello_1', 'Hello_2', 'Hello_3' ]
*/


// let promise1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Hello_1");
//     },5000);
// });


// let promise2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Hello_2")
//     },10000);
// });

// let promise3 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Hello_3");
//     },15000);
// });

// Promise.race([promise1,promise2,promise3]).then((posRes)=>{
//     console.log(posRes);
// },(errRes)=>{
//     console.log(errRes);
// });


// let promise1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Hello_1");
//     },5000);
// });


// let promise2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject("Error");
//     },10000);
// });

// let promise3 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Hello_3");
//     },15000);
// });

// Promise.all([promise1,promise2,promise3]).then((posRes)=>{
//     console.log(posRes);
// },(errRes)=>{
//     console.log(errRes);
// });



// let promise1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Hello_1");
//     },5000);
// });


// let promise2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject("Error");
//     },10000);
// });

// let promise3 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Hello_3");
//     },15000);
// });


// Promise.allSettled([promise1,promise2,promise3]).then((posRes)=>{
//     console.log(posRes);
// },(errRes)=>{
//     console.log(errRes);
// });



























































