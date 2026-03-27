function add(a,b,c){
    return a+b+c;
}
console.log(add(1,2,3))  
// currying is a technique in functional programming where a function 
// with multiple arguments is transformed into a sequence of functions that each take a single argument.
// It allows you to create new functions by partially applying arguments to an existing function.

function add(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }}
    constfirstAdd = add(1);
    const secondAdd = firstAdd(2);
    const result = secondAdd(3);
    console.log(result)  // Output: 6