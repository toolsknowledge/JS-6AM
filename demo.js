console.log("welcome to javascript");
console.log(10+10);                 //20        
console.log(10+"10");               //1010
console.log( 100+ +"100" );         //200
console.log( 10+"10"+10);           //101010
console.log( 10+ +"10"+10 );        //30
console.log( 10 - "2" );            //8
console.log( 10 - "2" - "8" );      //0
console.log( 10+"2"-"2" );         //100
console.log( 10>9>8 );             //false
console.log( 10 * "10");           //100
console.log( 100 / "100" );        //1
console.log( 100 / "0" );          //Infinity
console.log( 100+ +"100" - "100" * "100" );    //-9800




//==    value
//===   value & datatype
console.log( 1 == "1" );                //true
console.log( 1 === "1" );               //false
console.log( 1 == "one" );              //false
console.log( 1 === "one" );             //false
console.log( 1+true );                  //2
console.log( 1-true );                  //0
console.log( 1+true-false );            //2
