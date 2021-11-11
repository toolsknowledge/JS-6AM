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



/*
    let promise1 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Hello_1");
        },0);
    });

    let promise2 = new Promise((resolve,reject)=>{
        resolve("Hello_2");
    });

    promise1.then((posRes)=>{
        console.log(posRes);
    },(errRes)=>{
        console.log(errRes);
    });

    promise2.then((posRes)=>{
        console.log(posRes);
    },(errRes)=>{
        console.log(errRes);
    });
*/



/*
    let promise1 = new Promise((resolve,reject)=>{
        resolve("Hello");
    });

    async function my_fun(){
        let result = await promise1;
        console.log(result);
    };

    my_fun();                   //Hello
*/

/*
    let add = (num,callback)=>{
        return callback(num+5, false);
    };

    let sub = (num,callback)=>{
        return callback(num-3, false);
    };

    let mul = (num,callback)=>{
        return callback(num*2, false);
    };

    let div = (num,callback)=>{
        return callback(num/2+3,false);
    };

    add(5, (addRes,error)=>{
        if(!error){
            sub(addRes,(subRes,error)=>{
                if(!error){
                    mul(subRes,(mulRes,error)=>{
                        if(!error){
                            div(mulRes,(divRes,error)=>{
                                if(!error){
                                    console.log(divRes);
                                }
                            });
                        }
                    });
                }
            });
        }
    });
*/


let add = (num)=>{
    return new Promise((resolve,reject)=>{
        resolve(num+5);
    });
};

let sub = (num)=>{
    return new Promise((resolve,reject)=>{
        resolve(num-3);
    });
};


let mul = (num)=>{
    return new Promise((resolve,reject)=>{
        resolve(num*2);
    });
};


let div = (num)=>{
    return new Promise((resolve,reject)=>{
        resolve(num/2+3);
    });
};



// add(5).then((posRes)=>{
//     sub(posRes).then((posRes)=>{
//         mul(posRes).then((posRes)=>{
//             div(posRes).then((posRes)=>{
//                 console.log(posRes);
//             },(errRes)=>{

//             })
//         },(errRes)=>{

//         })
//     },(errRes)=>{

//     })
// },(errRes)=>{

// })

// async function calc(){
//     let addRes = await add(5);
//     let subRes = await sub(addRes);
//     let mulRes = await mul(subRes);
//     let divRes = await div(mulRes);
//     console.log(addRes, subRes, mulRes, divRes );
// };

// calc();


(async ()=>{
    let addRes = await add(5);
    let subRes = await sub(addRes);
    let mulRes = await mul(subRes);
    let divRes = await div(mulRes);
    console.log(addRes, subRes, mulRes, divRes );
})()
























































































