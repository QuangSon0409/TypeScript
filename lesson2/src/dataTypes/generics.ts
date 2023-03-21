function showData<T>(a: T): T {
  return a;
}

const arrNum = [1, 2, 3, 4, 5, 6, 7, 8];
const functionMap = <T>(
  arr: T[],
  callback: (item: T, index: number) => T
): T[] => {
  let temp: T[] = [];
  for (let i = 0; i < arr.length; i++) {
    const newItem = callback(arr[i], i);
    temp.push(newItem);
  }
  return temp;
};
const newData = functionMap(arrNum, (item, index) => {
  return item + item;
});

// lab1

const arrr = [9, 2, 1, 7, 8];
const arrr1 = ["trang", "an", "bìnhhhhhhhhhh", "minh"];
function sortInfo<T>(arr: T[]): T[] {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}
// console.log(sortInfo(arrr));

function sortFunction<T>(arr: T[], compareFn?: (a: T, b: T) => number): T[] {
  if (!compareFn) {
    const compareFn = function (a: T, b: T) {
      if (a > b) {
        return 1;
      } else if (a < b) {
        return 0;
      }
    };
  }
  if (compareFn) {
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (compareFn(arr[i], arr[j]) > 0) {
          let temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
      }
    }
  }

  return arr;
}

console.log(sortFunction(arrr));

console.log(sortFunction(arrr1, (a, b) => (a > b ? -1 : 1)));
// console.log(sortFunction(arrr1, (a, b) => a.localeCompare(b)));
