// let obj = {
//     name: "kh..t",
//     age: 13,
//     country: "india"
// }
// localStorage.removeItem("name", "kh..t");
// localStorage.setItem("age", "13");
// localStorage.setItem("country", "india");
// console.log(localStorage.getItem("name"));
// console.log(localStorage.getItem("age"));

// localStorage.setItem("obj", JSON.stringify(obj))
// localStorage.removeItem("age")
// console.log(JSON.parse(localStorage.getItem("obj")))



let obj = {
    name: "kh..t",
    age: 13,
    country: "india"
}
sessionStorage.removeItem("name", "kh..t");
sessionStorage.setItem("age", "13");
sessionStorage.setItem("country", "india");
console.log(sessionStorage.getItem("name"));
console.log(sessionStorage.getItem("age"));

sessionStorage.setItem("obj", JSON.stringify(obj))
sessionStorage.removeItem("age")
console.log(JSON.parse(sessionStorage.getItem("obj")))


document.cookie = "name=kh..t; expires=Fri, 31 Dec 2024 23:59:59 GMT UTC";
document.cookie = "age=13; expires=Fri, 31 Dec 2024 23:59:59 GMT UTC";