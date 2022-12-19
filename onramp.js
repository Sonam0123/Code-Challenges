//Write a function that will take a list of strings and return a list of strings with the unneeded directions removed(NORTH<>SOUTH OR EAST<>WEST side by side). For example: in ["NORTH", "EAST", "WEST", "SOUTH", "WEST", "SOUTH", "NORTH", "WEST"], "NORTH" and "SOUTH" are not directly opposite but they become directly opposite after the reduction of "EAST" and "WEST". The whole path can be reduced to ["WEST", "WEST"].
function directionReduction(arr){
    var opposite = {
        'NORTH':'SOUTH', 'EAST':'WEST', 'SOUTH':'NORTH', 'WEST':'EAST'
    };
    for(var i = 0; i < arr.length; i++){
        if(arr[i+1] === opposite[arr[i]]){
            arr.splice(i, 2);
            i = -1;
        }
    }
    return arr;
}
console.log(directionReduction(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]));