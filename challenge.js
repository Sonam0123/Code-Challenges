//check if string is palindrome
var isPalindrome = function(s) {
    let replaced = s.replace(/[^a-z0-9]/gi, '')
    let str = replaced.toLowerCase().split('').reverse().join(' ');
    let string = replaced.toLowerCase().split('').join(' ');
    return str === string
};
console.log(isPalindrome("A man, a plan, a canal: Panama"))