/*
    array - collection of "indexed" elements called as "array"

    index starts from "0"

    we will represent the array by using "[]"
*/


/*
    //length
    let arr = [10,20,30,40,50];
    console.log( arr.length );                                          //5
    console.log( arr[0], arr[2], arr[4], arr[5] , arr[-1] );            //10 30 50 undefined undefined
    arr.length = 3;               
    console.log( arr[0], arr[2], arr[3], arr[4], arr[-1]);              //10 30 undefined undefined undefined
*/


/*
    //push()
    //pop()
    //unshift()
    //shift()
    let arr = [20,30,40];
    console.log(arr);                   //[ 20, 30, 40 ]

    arr.push(50);
    console.log(arr);                   //[ 20, 30, 40, 50 ]

    arr.unshift(10);
    console.log(arr);                   //[ 10, 20, 30, 40, 50 ]


    arr.pop();
    console.log(arr);                   //[ 10, 20, 30, 40 ]


    arr.shift();
    console.log(arr);                   //[ 20, 30, 40 ]
*/


/*
    //delete
    let arr = [10,20,30,40,50];
    console.log(arr.length);                    //5

    delete arr[0];
    delete arr[2];
    console.log(arr.length);                    //5

    console.log(arr);                           //[ <1 empty item>, 20, <1 empty item>, 40, 50 ]
*/


/*
    let arr1 = [10,20,30];
    let arr2 = [40,50,60];
    let arr3 = [...arr1,...arr2];
    console.log(arr3);                  //[ 10, 20, 30, 40, 50, 60 ]
*/


