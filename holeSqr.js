/*---------------- (a+b)^2-------------------*/

/* First Solution */
/*---------------- Multiplication-------------------*/
function mul1(a,b){
    return a*b
    
}

var a = 3;
var b = 2;
function holeSqr1(a,b){
    return mul1(a,a) + 2 * mul1(a,b) + mul1(b,b)
    
}
console.log("This is the First Solution")
var c1 = holeSqr1(a,b)
console.log("The hole square of ( "+a+" + "+b+" )^2 is:")
console.log(c1)
/* ------------------------------------------------------------------------------------------------------------------------*/
/* Second Solution */
/*---------------- Multiplication-------------------*/
function mul2(a,b){
    return a*b
    
}
/*---------------- Addition-------------------*/
function add(a,b){
    return a+b
    
}

var a = 4;
var b = 5;
function holeSqr2(a,b){
    m1 = mul2(a,a); // Call the mul Function
    m2 = 2 * mul2(a,b); // Call the mul Function
    m3 = mul2(b,b); // Call the mul Function

    a1 = add(m1,m2);
    ans = add(a1,m3);
    return ans

    
}


console.log("This is the Second Solution")
var c2 = holeSqr2(a,b)
console.log("The hole square of ( "+a+" + "+b+" )^2 is:")
console.log(c2)