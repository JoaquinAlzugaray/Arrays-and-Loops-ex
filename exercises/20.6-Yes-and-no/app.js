let theBools = [0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1];

//your code here

let convert = function(val) {
    if (val == 1) {
        val = 'wiki'
    }
    else {
        val = 'woko'
    }
    return val
} 

console.log(theBools.map(convert));