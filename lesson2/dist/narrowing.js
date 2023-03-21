// union type
// typeof
function printInfo(info) {
    if (typeof info === "string") {
        return info.charAt(0).toUpperCase() + info.slice(1);
    }
    return info;
}
printInfo("sơn");
// instanceof
var date = new Date();
function checkDate(date) {
    if (date instanceof Date) {
        return date.getDate();
    }
}
// Optional
function check(sinhvien) {
    if (!!sinhvien) {
        return sinhvien.name;
    }
    return "";
}
function loginUser(user) {
    if ("is_admin" in user && user.is_admin === true) {
        console.log("Welcome to admin");
    }
    else {
        console.log("Welcome to backs");
    }
}
