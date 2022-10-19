//check if string is palindrome
var isPalindrome = function(s) {
    let replaced = s.replace(/[^a-z0-9]/gi, '')
    let str = replaced.toLowerCase().split('').reverse().join(' ');
    let string = replaced.toLowerCase().split('').join(' ');
    return str === string
};

//duplicates

function areThereDuplicates(nums) {
    let num = nums.toString()
    let map = new Map()
    for(let i = 0; i < num.length; i++){
        console.log(map)
        if(map.has(num[i])){
            return true
        }else{
            map.set(num[i])
        }
    }
    return false
}

//sumZero
function sumZero(arr){
    arr.sort(function(a,b){return a - b})
    let left = 0
    let right = arr.length -1

    while(left < right){
        let sum = arr[left] + arr[right]
        console.log(sum)
        if(sum < 0){
            left ++
        }else if(sum == 0){
            return [arr[left], arr[right]]
        }
        right--

    }
    return []

}
console.log(sumZero([-2,-3,-10,1,2,3,1,4]))