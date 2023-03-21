// 1 khai báo hàm (function declaration)
function num1() {
    console.log("function1");
}
var num2 = function num2() {
    console.log("function2");
};
var num3 = function () {
    console.log("function3");
};
// 2 function return
var showName = function () {
    return "name is ...";
};
var function4 = function () {
    console.log("number1");
};
var showError = function () {
    var error = new Error("bạn nên tìm lỗi ");
    throw error;
};
// 3 function parameter
function divide(a, b) {
    if (b === void 0) { b = 1; }
    return a / b;
}
function showDes(name, address) {
    if (address === void 0) { address = ""; }
    return "tên của bạn là " + name;
}
// 4 rest parameter
function printClass(name) {
    var classes = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        classes[_i - 1] = arguments[_i];
    }
    return "h\u1ECDc sinh ".concat(name, " h\u1ECDc nh\u1EEFng l\u1EDBp ").concat("TypeScript");
}
// 5 callback
var numArr = [1, 2, 3, 5, 8, 13, 21]; // fibonacci
// const result = numArr.map((item) => {
//   return item * item;
// });
// console.log(result);
var web17307_map = function (arr, callback) {
    var array = [];
    if (!!callback) {
        for (var i = 0; i < arr.length; i++) {
            var element = callback(arr[i]);
            array.push(element);
            console.log("vị trí hiện tại của phần từ " + i + "là " + arr[i]);
        }
        return array;
    }
};
var result = web17307_map(numArr, function (item) {
    return item * item;
});
console.log(result);
