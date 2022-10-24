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
        return false
    }
    let maxSum = 0
    let tempSum = 0
    for (var i = 0; i < num; i++) {
        maxSum += arr[i]
    }
    tempSum = maxSum
    for(let i = num; i < arr.length; i++){
        tempSum = tempSum - arr[i - num] + arr[i]
        maxSum = Math.max(maxSum, tempSum)
    }
    return maxSum
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
// console.log(isSubsequence('abc', 'abraadcbra'))

//average pair of two numbers
function averagePair(arr, num){
    if(arr.length == 0){
        return false
    }
    let left = 0
    let right = arr.length - 1 
    
    while(left < right){
        let formula = (arr[left] + arr[right]) / 2
        console.log(formula, num)
        if(formula < num){
            left ++
        }else if(formula === num){
            return true
        }else{
            right--
        }
    }
    return false
}
// console.log(averagePair([1,2,3],2.5))


var commonChars = function(words) {
    let war = words.join``.split``
    let freq = {}
    for(let i = 0; i < war.length; i++){
        freq[war[i]] = freq[war[i]] + 1 || 1
    }

};
let words = ["bella","label","roller"]
// console.log(commonChars(words))

var removeDuplicates = function(nums) {
    let j = 0
    for(let i = 0; i < nums.length; i++){
        if(nums[i] != nums[i+1]){
            nums[j] = nums[i]
            j++
        }
    }
    return j
};

// console.log(removeDuplicates([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10]))
var firstUniqChar = function(s) {

    let map = {}
    let count= 0
    for(let i = 0; i < s.length; i++){
        if(map[s[i]]){
           console.log(map[s[i]][1]++) 
        }
        else{
            map[s[i]] =  [i, count]    
        }
    }
    console.log(map)
};
// console.log(firstUniqChar('leetcode'))
var commonChars = function(words) {
    let map = {}    
    let arr = []
    for(let i = 0; i < words[0].length; i++){
        map[words[0][i]] = map[words[0][i]] + 1 || 1
    }
    for(let i = 1; i < words.length; i++){
        for(let j = 0; j < words[i].length; j++){
            console.log(words[i][j])
    }
    return arr
}
}
// console.log(commonChars(["bella","label","roller"]))

function sameFrequency(num1, num2){
    let str1 = num1.toString()
    let str2 = num2.toString()
    if(str2.length != str1.length){
        return false
    }
    let freq1 = {}
    let freq2  ={}
    for(let i = 0; i < str1.length; i++){
        freq1[str1[i]] = freq1[str1[i]] + 1 || 1 
    }
    for(let i = 0; i < str2.length; i++){
        freq2[str2[i]] = freq2[str2[i]] + 1 || 1
    }
    for(let key in freq1){
        if(freq1[key] != freq2[key]){
            return false
        }
    }
    return true
}

// console.log(sameFrequency(182, 281))
