//variables
//variables are used to store the "data"
//string, number, boolean, object,............
//we can declare the variables by using "var", "let" or "const"
//"let" and "const" keywords introduced in "ES6"
//variables should contain a-z , A-Z, 0-9, $ and _
//variables should not start with "digits"
/*
    syntax:
    var/let/const variablename = value;
*/
var var_one = "Hello";
console.log( var_one );             //Hello

//var 123abc = "Welcome";             //Variable declaration expected.
var abc123;
var abc$123;
//var abc#123;
var _123;


//numbers
//1) decimal        2) float (or) double      3) hexadecimal        4) octal        5) binary
//hexadecimal numbers will prefix with "0x"
//octal numbers will prefix with "0o"
//binary numbers will prefix with "0b"
var decimalNum = 100;
var doubleNum = 100.12345;
var hexadecimalNum = 0x123ABC;
var octalNum = 0o123;
var binaryNum = 0b1010;
console.log(
    decimalNum,
    doubleNum,
    hexadecimalNum,
    octalNum,
    binaryNum
);                      //100 100.12345 1194684 83 10



//boolean
//true or false
//true --- 1
//false --- 0
var flag = true;
console.log( flag );            //true
console.log( 1+true );          //2
console.log( true+true );       //2
console.log( true-false );      //1
console.log( "1" + true );      //1true
console.log( +"1" + true );     //2
var x = "Hello";
x === "Hello" ? console.log("welcome") : console.log("Bye");   //welcome

//string
//collection of characters called as "string"
//"" , '' and ``(backtick)
//``(backtick) operator introduved in ES6
//``(backtick) operator called as template literal
//``(backtick) operaror used to define the "paragraphs"
var sub = "JavaScript";
var wish = `Welcome to ${sub}`;
console.log( wish );


var sub_one = "ReactJS";
var sub_two = "NodeJS";
var sub_three = "MongoDB";
var mernStack = `${sub_one} <==> ${sub_two} <==> ${sub_three}`;
console.log( mernStack );           //ReactJS <==> NodeJS <==> MongoDB



var tbl_name = "employees";
var sal = 50000;
var sql_query1 = `select * from ${tbl_name} where esal>${sal}`;
console.log( sql_query1 );    //select * from employees where esal>50000

var uname = "admin";
var upwd = "admin123";
var sql_query2 = `select * from ${tbl_name} where uname='${uname}' and upwd='${upwd}'`;
console.log(sql_query2);            //select * from employees where uname='admin' and upwd='admin123'


var mern = `MERN Stack Means
            ****************
            frontend = ${sub_one}
            +++++++++++++++++++++
            backend = ${sub_two}
            ^^^^^^^^^^^^^^^^^^^^
            database = ${sub_three}`;
console.log(mern);



//string
//number
//boolean
//undefined
//null
//bigint
//Symbol
var x1;
console.log(x1);                //undefined

x1 = null;
console.log( x1 );              //null



console.log( undefined == undefined );          //true
console.log( undefined === undefined );         //true
console.log( null == null );                    //true
console.log( null === null );                   //true
console.log( undefined == null );               //true
console.log( undefined === null );              //false



//bigint
//suffix with "n"
// > 2^53 - 1
var bigint = 137092372109371209371207210970294720947209470924702972097097097070970970970972093723097123091270317230971230712039710937120371023710237013730917302370137092372109371209371207210970294720947209470924702972097097097070970970970972093723097123091270317230971230712039710937120371023710237013730917302370137092372109371209371207210970294720947209470924702972097097097070970970970972093723097123091270317230971230712039710937120371023710237013730917302370137092372109371209371207210970294720947209470924702972097097097070970970970972093723097123091270317230971230712039710937120371023710237013730917302370n;
console.log(bigint);



//typeof
console.log( typeof "Hello" );                      //string
console.log( typeof 100 );                          //number
console.log( typeof true );                         //boolean
console.log( typeof undefined );                    //undefined
console.log( typeof null );                         //object
console.log( typeof [] );                           //object
console.log( typeof 1n );                           //bigint


console.log( 1n+2n );                               //3n
//console.log( 1+2n );                                //TypeError: Cannot mix BigInt and other types, use explicit conversions

console.log( 1n / 1n );                             //1n
console.log( 1/1n );                                //TypeError: Cannot mix BigInt and other types, use explicit conversions
















