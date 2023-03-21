function showData(a) {
    return a;
}
var arrNum = [1, 2, 3, 4, 5, 6, 7, 8];
var functionMap = function (arr, callback) {
    var temp = [];
    for (var i = 0; i < arr.length; i++) {
        var newItem = callback(arr[i], i);
        temp.push(newItem);
    }
    return temp;
};
var newData = functionMap(arrNum, function (item, index) {
    return item + item;
});
// lab1
var arrr = [9, 2, 1, 7, 8];
var arrr1 = ["trang", "an", "bìnhhhhhhhhhh", "minh"];
function sortInfo(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
// console.log(sortInfo(arrr));
function sortFunction(arr, compareFn) {
    if (!compareFn) {
        var compareFn_1 = function (a, b) {
            if (a > b) {
                return 1;
            }
            else if (a < b) {
                return 0;
            }
        };
    }
    if (compareFn) {
        for (var i = 0; i < arr.length - 1; i++) {
            for (var j = i + 1; j < arr.length; j++) {
                if (compareFn(arr[i], arr[j]) > 0) {
                    var temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
        }
    }
    return arr;
}
console.log(sortFunction(arrr));
console.log(sortFunction(arrr1, function (a, b) { return (a > b ? -1 : 1); }));
// console.log(sortFunction(arrr1, (a, b) => a.localeCompare(b)));
