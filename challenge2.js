function maxProfit(prices){
    let profit = 0;
    for(let i = 0; i < prices.length; i++){

        if(prices[i] < prices[i + 1]){
            profit += (prices[i + 1] - prices[i])
        }
    }
    return profit 
}
// console.log(maxProfit([7,1,5,3,6,4]));
var rotate = function(nums, k) {
    let rotate = 0
    let arr = []
    while(rotate < k){
        arr.push(nums.pop())
        rotate++
    }
    let newArr= arr.reverse().concat(nums)
    console.log(newArr)
};
// console.log(rotate([-1,-100,3,99], 2))

function maxProfit2(prices){
    let left = 0
    let right = 1;
    let maxProfit = 0;
    while(right < prices.length){
        if(prices[left] < prices[right]){
            let profit = prices[right] - prices[left]
            maxProfit = Math.max(profit, maxProfit)
        }else{
            left = right
        }
        right ++
    }
    return maxProfit
}
// console.log(maxProfit2([7,1,3,4,6,4]))

function isPalindrome(str){
    str.replace(/\W/g, '')
    let rev = str.split('').reverse()
    let left = 0;
    let right = str.length - 1;
    while(left < right){
        if(str[left] != rev[left]){
            return false
        }
        left ++
    }
    return true
}
// console.log(isPalindrome('race a car'))

var lengthOfLongestSubstring = function(str) {
    let longest = 0;
    let seen = {};
    let start = 0;
   
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      console.log(char)
      if (seen[char]) {
        start = Math.max(start, seen[char]);
      }
      longest = Math.max(longest, i - start + 1);
      seen[char] = i + 1;
    }
    return longest;
  };
//   console.log(lengthOfLongestSubstring('abcabcbb'))

//a string is said to be beautiful if b occurs in it no more times than a; c occurs in it no more times than b; etc. for example 'bbbaacdafe' is beautiful since there aren't any letters that appear more frequently than the previous letter in the alphabet. Given a string, check whether it is beautiful.
function beautifulString(str){
    let obj = {}
    for(let i = 0; i < str.length; i++){
        if(obj[str[i]]){
            obj[str[i]]++
        }else{
            obj[str[i]] = 1
        }
    }
    let arr = Object.values(obj)
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > arr[i + 1]){
            return false
        }
    }
    return true
}
// console.log(beautifulString('bbbaacdafe'))

// Consider a string consisting of the characters < and > only. The string is balanced if each < always appears before (i.e., to the left of) a corresponding > character (they do not need to be adjacent). Morever each < and > act as a unique pair of symbols and neither symbol can be considered as part of any pair of symbols. To balance a string, any > character can be replaced with <>. Given an expression and a maximum number of replacements, determine whether the string can be balanced.
// Example expressions= ['<<>>', '<>','<><>', '>>' , '<<>', '><><'] maxReplacements = [0, 1, 2, 2, 2, 2]
// Process a series of expressions and their corresponding maxReplacements. Each of the first three expressions is balanced already. The string expressions[3] = '>>' can be balanced in two moves by replacing each > with <> to make <><>. Neither of the last two strings can ever be balanced. Return an array of integers where element[i] contains a 1 if the expression can be balanced or a 0 if it cannot. Sample ['<>>>', '<>>>>'], [2] Output [1, 0]

function balancedString(expressions, maxReplacements){
    let arr = []
    for(let i = 0; i < expressions.length; i++){
        let count = 0
        for(let j = 0; j < expressions[i].length; j++){
            if(expressions[i][j] === '>'){
                count++
            }else{
                count --
            }
        }
        if(count > maxReplacements[i]){
            arr.push(0)
        }else{
            arr.push(1)
        }
    }
    return arr
}
// console.log(balancedString(['<>>>', '<>>>>'], [2]))

//for each input N, print 1 if N is a self-describing number, or 0 if it is not. Sample Input 2020 Output 1
// console.log(selfdescribingnumber(2020))

function selfdescribingnumber(num){
    let arr = num.toString().split('')
    //We turn the argument number into a string and split it into single digit of strings because we can't iterate over a number
    let obj = {}
    for(let i = 0; i < arr.length; i++){
        if(obj[arr[i]]){
            obj[arr[i]]++
        }else{
            obj[arr[i]] = 1
        }
    }
    // We create an object to store the number of times a digit appears in the argument number

    for(let key in obj){
        if(obj[key] != arr[key]){
            return 0
        }
    }
    // We iterate over the object and check if the number of times a digit appears in the argument number is equal to the digit itself
    return 1
}
// console.log(selfdescribingnumber(621000100))


