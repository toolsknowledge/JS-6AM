/*
    //for loop
    for(let i=0;i<5;i++){
        
    }
    console.log(i);             //var : 5    //let : ReferenceError: i is not defined
    //var keyword breaks the scope rule
    //let keyword obeys the scope rule
*/



/*
    let sub = "JavaScript";
    let sub = "Venila JavaScript";
    console.log( sub );             //var : Venila JavaScript       //let: SyntaxError: Identifier 'sub' has already been declared
    //var keyword allows the duplicate variables
    //let keyword wont allows the duplicate variables
*/


/*
    //global
    let data = 100;


    //block
    {
        //local
        let data = 200;
    }

    console.log(data);          //var : 200         //let : 100

            
    //if any block of code effecting global member called as global polluting issue
    //global polluting issue raised because of var keyword
    //we can overcome global polluting issue by using let keyword
*/


/*
    //variables declaration and initilization
    //variable accessing
    console.log(data);               //var : undefined    //let : ReferenceError: Cannot access 'data' before initialization
    let data = 100; 
    //getting undefined before declaration and initilization called as variable hoisting
    //variable hoisting issue raised because of var keyword
    //we can overcome variable hoisting with the help of let keyword
*/

/*
                        var                                             let
    ******************************************************************************************************
    ES1                                                                 ES6

    scope rule break                                                    scope rule follows

    duplicate members allows                                            duplicate members won't allows

    global polluting issue raised                                       we can overcome

    variable hoisting raised                                            we can overvome
    *******************************************************************************************************
*/


//const keyword
//const data = 100;
//data = 200;                     //TypeError: Assignment to constant variable.



const arr = [1,2,3,4,5];
//arr = [];                           //TypeError: Assignment to constant variable.

arr[0] = 100;
arr[4] = 500;
arr[5] = 600;
console.log( arr );                     //[ 100, 2, 3, 4, 500, 600 ]

arr.pop();
console.log( arr ); 
arr.shift();
console.log( arr );                     //[ 2, 3, 4, 500 ]





const obj = {
    "sub_one":"Angular12",
    "sub_two":"NodeJS",
    "sub_three":"MongoDB"
};
//obj={};                             //TypeError: Assignment to constant variable.


obj.sub_one = "Angular13";
obj.sub_two = "Deno";
obj.sub_three = "CassandraDB";
console.log(obj);                   //{ sub_one: 'Angular13', sub_two: 'Deno', sub_three: 'CassandraDB' }



var data = Symbol( 100 );
console.log( data );

console.log( typeof data );             //symbol





















