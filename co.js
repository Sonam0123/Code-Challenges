const fs = require('fs')

const [A, B, C] = JSON.parse(fs.readFileSync('input'));

function getA(){
    return A;
}

function getB(callback){
    setTimeout(() => {
        callback(B);
    }, 10);
}

function getC(){
    return Promise,resolve().then(() => C);
}

// getB(callback) - callback driven
// your task is to implement getABC which returns a promise aggregating each function's result, like [<result of getA>, <result of getB>, <result of getC>]
function getABC(){
    return Promise.all([getA(), setTimeout(() => getB(), 10), getC()]);
}

getABC().then((arr) => {
    console.log(arr);
});
