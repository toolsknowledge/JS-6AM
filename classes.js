/*
    class class_one{
        sub_one = "Angular13";
        sub_two = "NodeJS";
        sub_three = "MongoDB";
    }

    let obj1 = new class_one();
    console.log(
        obj1.sub_one,
        obj1.sub_two,
        obj1.sub_three
    );                                  //Angular13 NodeJS MongoDB
*/


class class_one{
    sub_one = "Angular13";
    sub_two = "NodeJS";
    sub_three = "MongoDB";

    getSubOne(){
        return this.sub_one;
    }

    getSubTwo(){
        return this.sub_two;
    }

    getSubThree(){
        return this.sub_three;
    }
};

let obj1 = new class_one();
console.log( obj1.getSubOne(),
                obj1.getSubTwo(),
                obj1.getSubThree() );
//Angular13 NodeJS MongoDB



















