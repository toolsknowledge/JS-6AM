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



/*
    let arr1 = [20,30,40];
    let arr2 = [...arr1];

    arr2.push(50);
    arr2.unshift(10);

    console.log(arr1);                              //[ 20, 30, 40 ]
    console.log(arr2);                              //[ 10, 20, 30, 40, 50 ]
*/


/*
    //splice
    let arr1 = [10,20,30,40,50,60,70,80,90,100];
    arr1.splice(1,2);
    console.log(arr1);              //[10,40,50,60,70,80,90,100]


    arr1.splice(7,1);
    console.log(arr1);               //[10,40,50,60,70,80,90]


    arr1.splice(2,2);
    console.log(arr1);              //[ 10, 40, 70, 80, 90 ]

    arr1.splice(0,1);
    console.log(arr1);              //[ 40, 70, 80, 90 ]


    arr1.splice(1,0,50,60);
    console.log(arr1);              //[ 40, 50, 60, 70, 80, 90 ]


    arr1.splice(0,1,10,20,30,40);
    console.log(arr1);              //[10,20,30,40,50,60,70,80,90]


    arr1.splice(9,0,100);
    console.log(arr1);              //[10,20,30,40,50,60,70,80,90,100]
*/




/*
    let arr1 = [0,1,2,3,4,5,6,7,8,9];
    arr1.splice(0,1);
    console.log(arr1);              //[1,2,3,4,5,6,7,8,9]


    arr1.splice(8,1);
    console.log(arr1);              //[1,2,3,4,5,6,7,8]



    arr1.splice(3,1);
    console.log(arr1);              //[1,2,3,5,6,7,8]


    arr1.splice(7,0,9);
    arr1.splice(0,0,0);
    arr1.splice(4,0,4);
    console.log(arr1);              //[0,1,2,3,4,5,6,7,8,9]
*/


/*
    //map()
    //used to manipulate each element
    console.log(
        [1,2,3,4,5].map((element,index)=>{
            return element*100;
        })
    );                  //[ 100, 200, 300, 400, 500 ]


    console.log(
        [1,2,3,4,5].map((element,index)=>{
            return [element];
        })
    );                  //[ [ 1 ], [ 2 ], [ 3 ], [ 4 ], [ 5 ] ]


    console.log(
        [1,2,3,4,5].map((element,index)=>{
            return [element,index];
        })
    );

    //[[1,0],[2,1],[3,2],[4,3],[5,4]]


    console.log(
        [1,2,3,4,5].map((element,index)=>{
            return {[index]:element};
        })
    );              //[ { '0': 1 }, { '1': 2 }, { '2': 3 }, { '3': 4 }, { '4': 5 } ]
*/


//filter()
console.log(
    [1,2,3,4,5].filter((element,index)=>{
        return element>=3;
    }).map((element,index)=>{   
        return element*100;
    })
);                  //[ 300, 400, 500 ]



console.log(
    [{"e_id":111,"e_name":"e_one","e_sal":10000},
     {"e_id":222,"e_name":"e_two","e_sal":20000},
     {"e_id":333,"e_name":"e_three","e_sal":30000},
     {"e_id":444,"e_name":"e_four","e_sal":40000},
     {"e_id":555,"e_name":"e_five","e_sal":50000}].filter((element,index)=>{
        return element.e_sal>=30000;
     }).map((element,index)=>{
        return element.e_name === "e_three" ? {"e_id":333,"e_name":"employee_three","e_sal":30000} : element;
     })
)










































































