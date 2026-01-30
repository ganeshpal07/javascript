// it is a synchronius language (waits previous task to complete)
// console.log("first line")
// setTimeout(()=>{
//     console.log("thirdline")
// },2000)
// console.log("second line")
// setTimeout(()=>{
//     alert("this is an alert after 3 seconds")
// }, 3000)
// // it is a one time function.

// setInterval(()=>{
//     console.log("this messsage is displayed after every 2 seconds")
// }, 2000)
// setInterval(()=>{
//     clearInterval(timerId)
// }, 10000)




let count = 1
const intervalId = setInterval(()=>{
    console.log(count)
    count++;
    if(count>10){
        clearInterval(intervalId)
    }
}, 1000)
