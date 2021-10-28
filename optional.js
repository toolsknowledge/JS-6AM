/*
    function fun_one(arg1?:string, arg2?:string, arg3?:string):void{
        console.log( arg1, arg2, arg3 );
    }
    fun_one();                              //undefined undefined undefined
    fun_one("Hello_1");                     //Hello_1 undefined undefined
    fun_one(undefined,undefined,"Hello_3"); //undefined undefined Hello_3
    fun_one(null,null,null);                //null null null
*/
/*
    function fun_one(arg2:string,arg1?:string):void{
        console.log(arg2, arg1 );
    }
    //fun_one();                  //Expected 1-2 arguments, but got 0.
    fun_one("Hello_1");           //Hello_1 undefined
    fun_one("Hello_1","Hello_2"); //Hello_1 Hello_2
    fun_one(undefined,undefined); //undefined undefined
    fun_one(null,null);           //null null
*/
function fun_one(op1, op2, op3) {
    if (op2 === void 0) { op2 = "Hello_2"; }
    var op4 = [];
    for (var _i = 3; _i < arguments.length; _i++) {
        op4[_i - 3] = arguments[_i];
    }
    console.log(op1, op2, op3, op4);
}
//fun_one();                                //Expected at least 1 arguments, but got 0.
//fun_one("Hello_1");                         //Hello_1 Hello_2 undefined []
//fun_one("Hello_1","Hello_2","Hello_3","Hello_4");   //Hello_1 Hello_2 Hello_3 [ 'Hello_4' ]
//fun_one(undefined,undefined,undefined,undefined);  //undefined Hello_2 undefined [ undefined ]
fun_one(null, null, null, null); //
