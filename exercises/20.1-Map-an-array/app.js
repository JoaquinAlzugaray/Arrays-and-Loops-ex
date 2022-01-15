//var arrayOfCelsiusValues = [-2,34,56,-10];

//var arrayOfFahrenheitValues = arrayOfCelsiusValues.map(function(value){
	
	//add your code here and return the new value
//	let fahren = (value * (9/5)) + 32
//	return fahren
//});

//console.log(arrayOfFahrenheitValues);

let allColors = [
	{label: 'Red', sexy: true},
	{label: 'Pink', sexy: false},
	{label: 'Orange', sexy: true},
	{label: 'Brown', sexy: false},
	{label: 'Pink', sexy: true},
	{label: 'Violet', sexy: true},
	{label: 'Purple', sexy: false},
];

let sexycolors = []
for (let i= 0; i < allColors.length; i ++) {
	if (allColors[i].sexy==true) {
		sexycolors.push(allColors[i].label)
	}
}

console.log(sexycolors);