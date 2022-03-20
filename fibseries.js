/*---------------- Fibonachi Series-------------------*/

var a = 0;
var b = 1;
var c= 10;
if(c >= 1){
    console.log(a)
}
if(c >= 2){
    console.log(b)
}
function fib(c){
    for(var i = 3; i <= c;i++){
        d= a+b;
        a = b;
        b = d;
        console.log(d)
    }
    
}

fib(c)