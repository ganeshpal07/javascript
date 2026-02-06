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

    
// console.log("starting homework...");

// setTimeout(() => {
//     console.log("homework completed!");
//     console.log("starting dinner...");
//     setTimeout(() => {
//         console.log("dinner completed!");
//         console.log("getting ready to go out...");
//         setTimeout(() => {
//             console.log("going to playground!");
//         }, 1000); 
        
//     }, 1500);

// }, 2000);     


// function finishHomework(callback){
//     console.log("starting homework...");

//     setTimeout(() => {
//         console.log("homework completed!");
//         callback();
//     }, 2000);
// }

// function eatdinner(callback){
//     console.log("starting dinner...");
//     setTimeout(() => {
//         console.log("dinner completed!");
//         callback();
//     }, 1500);

// }


// const input =document.querySelector('#task')
// const btn = document.querySelector('.btn')
// const list = document.querySelector('.list')

// btn.addEventListener('click',(e)=>{
//     e.preventDefault()
//     if(input.value===""){
//         alert("please enter a task")
//         return
//     }
//     const li=document.createElement('li')
//     const deletebtn=document.createElement('button')
//     deletebtn.innerText='delete'
//     li.innerText=input.value
//     li.appendChild(deletebtn)
//     list.appendChild(li)
//     deletebtn.addEventListener('click',()=>{
//         list.removeChild(li)
//     })
//     input.value=""
// })

const promise = new Promise(function(resolve, reject) {
    setTimeout(() => {
        resolve("promise fulfilled after 2 seconds");
    }, 2000);
})

const p=new Promise(function(resolve, reject) {
    setTimeout(() => {
        let done = true;
        if (done) {
            resolve()
        }else{
            reject()}
        }, 5000)
    })
    console.log(p)


p.then(()=>{console.log("promise fulfiled sucessfully")
}).catch(()=>{console.log("promise rejected with an error")
})


p.then((data)=>{
    console.log("resolved data:", data)
}).catch((error)=>{
    console.log("error:", error)
}).finally(()=>{console.log  
("promise is settled (either resolved or rejected)")
})  


function doHomework() {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            if(done){
                console.timeLog("homework completed")
                resolve("homework completed")
            }else{
                reject("homework not completed")
            }
        }, 5000);
    })
    return p
}


function doHomework() {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            if(done){
                console.timeLog("dinner completed")
                resolve("dinner completed")
            }else{
                reject("dinner not completed")
            }
        }, 5000);
    })
    return p
}


function goPlayground() {
    const p = new Promise(function(resolve, reject) { 
        setTimeout(() => {
            let done = true;
            if (done) {
                console.timeLog("going to playground")
                resolve("going to playground")
            } else {
                console.log("failed to go to playground")
                reject("failed to go to playground")
            }
        }, 5000);
    })
    return p
}