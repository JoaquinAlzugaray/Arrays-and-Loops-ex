var myArray = [2323,4344,2325,324413,21234,24531,2123,42234,544,456,345,42,5445,23,5656,423];

let total = 0
let large = myArray.length
//console.log(large);

for (var index in myArray){
	let num = myArray[index]
	total += num
}

console.log(total/large);