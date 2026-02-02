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




// let count = 1
// const intervalId = setInterval(()=>{
//     console.log(count)
//     count++;
//     if(count>10){
//         clearInterval(intervalId)
//     }
// }, 1000)


// function print(){     // callback function

//     console.log("hello students!!")
// }

// function greet(num){    // higher order function
//     console.log("welcome to my classs!!")
//     num()
// }
// greet(print)

// function greet(num, message){    // higher order function
//     console.log("welcome to my classs!!")
//     setTimeout(()=>{
//         console.log("inside timeout")
//         let firstName = "john"
//         num(firstName)
//     }, 2000);

// }

// greet(print)

    
console.log("starting homework...");

setTimeout(() => {
    console.log("homework completed!");
    console.log("starting dinner...");
    setTimeout(() => {
        console.log("dinner completed!");
        console.log("getting ready to go out...");
        setTimeout(() => {
            console.log("going to playground!");
        }, 1000); 
        
    }, 1500);

}, 2000);     


function finishHomework(callback){
    console.log("starting homework...");

    setTimeout(() => {
        console.log("homework completed!");
        callback();
    }, 2000);
}

function eatdinner(callback){
    console.log("starting dinner...");
    setTimeout(() => {
        console.log("dinner completed!");
        callback();
    }, 1500);

}