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
    let rotate = -1
    while(rotate < k){
        let prop = nums.shift()
        rotate++
        nums.push(nums[0])
    }
    return nums
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
console.log(maxProfit2([7,1,3,4,6,4]))
