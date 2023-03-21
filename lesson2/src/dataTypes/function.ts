// 1 khai báo hàm (function declaration)

function num1() {
  console.log("function1");
}
const num2 = function num2() {
  console.log("function2");
};
const num3 = () => {
  console.log("function3");
};

// 2 function return
const showName = (): string => {
  return "name is ...";
};

const function4 = (): void => {
  console.log("number1");
};
const showError = (): never => {
  const error = new Error("bạn nên tìm lỗi ");
  throw error;
};

// 3 function parameter

function divide(a: number, b: number = 1): number {
  return a / b;
}
function showDes(name: string, address: string = "") {
  return "tên của bạn là " + name;
}

// 4 rest parameter

function printClass(name: string, ...classes: string[]) {
  return `học sinh ${name} học những lớp ${"TypeScript"}`;
}

// 5 callback

const numArr = [1, 2, 3, 5, 8, 13, 21]; // fibonacci

// const result = numArr.map((item) => {
//   return item * item;
// });
// console.log(result);

const web17307_map = function (
  arr: number[],
  callback?: (item: number) => number
) {
  let array: number[] = [];
  if (!!callback) {
    for (let i = 0; i < arr.length; i++) {
      const element = callback(arr[i]);
      array.push(element);
      console.log("vị trí hiện tại của phần từ " + i + "là " + arr[i]);
    }
    return array;
  }
};
const result = web17307_map(numArr, (item) => {
  return item * item;
});
console.log(result);
