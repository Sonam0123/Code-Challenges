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
// console.log(sumZero([-2,-3,-10,1,2,3,1,4]))

function countUniqueValues(arr){
    if(arr.length == 0){
        return 0
    }
    let uniques = 1
    let left = 0
    let right = 1 
    let final = arr.length - 1
    while(left < final){
        if(arr[left] != arr[right]){
            uniques++
        }
        left++
        right++
    }
    return uniques

}
// console.log(countUniqueValues([]))

//Max sub array using sliding windows
function maxSubArray(arr, num){
    if(num > arr.length){
        return null
    }
    let max = 0;
    let temp = 0;
    for(let i = 0; i < num; i++){
        max += arr[i]
    }
    temp = max;
    for(let i = num; i < arr.length; i++){
        temp = temp - arr[i - num] + arr[i]
        max = Math.max(max, temp )
    }
    return max
}
// console.log(maxSubArray([2,6,9,2,1,8,5,6,3], 2))
function areThereDuplicates() {
    let freq = {}
    for(let key in arguments){
        freq[arguments[key]] = freq[arguments[key]] + 1 || 1
    }
    for(let key in freq){
        if(freq[key] > 1){
            return true
        }
        return false
    }
}
// console.log(areThereDuplicates(1, 2, 3, 4))

//subsequence string using pointers
function isSubsequence(str1, str2) {
    let i = 0;
    let j = 0;
    if (!str1) return true;
    while (j < str2.length) {
        if (str2[j] === str1[i]) i++;
        if (i === str1.length) return true;
        j++;
    }
    return false;
}
console.log(isSubsequence('abc', 'abraadcbra'))