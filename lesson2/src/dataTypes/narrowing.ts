// union type
// typeof
function printInfo(info: string | number) {
  if (typeof info === "string") {
    return info.charAt(0).toUpperCase() + info.slice(1);
  }
  return info;
}
printInfo("sơn");

// instanceof
const date = new Date();
function checkDate(date: Date | string) {
  if (date instanceof Date) {
    return date.getDate();
  }
}
// Optional
function check(sinhvien?: { name: string; grade: number }) {
  if (!!sinhvien) {
    return sinhvien.name;
  }
  return "";
}
function loginUser(user: User | Admin) {
  if ("is_admin" in user && user.is_admin === true) {
    console.log("Welcome to admin");
  } else {
    console.log("Welcome to backs");
  }
}
