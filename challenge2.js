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

