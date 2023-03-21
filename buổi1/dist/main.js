// explitcit tường minh
var str = "mọi người abc1";
console.log(str);
//Implicit
var a = 10;
if (typeof str == "number") {
    console.log(str - a);
}
else {
    console.log(str + a);
}
