let allColors = [
	{label: 'Red', sexy: true},
	{label: 'Pink', sexy: false},
	{label: 'Orange', sexy: true},
	{label: 'Brown', sexy: false},
	{label: 'Pink', sexy: true},
	{label: 'Violet', sexy: true},
	{label: 'Purple', sexy: false},
];

function generateLI(color){
	// your code here
	let a = '<li>'
	let b = '</li>'
	return a + b
}

function filterColors(color){
	// your code here
	let sexycolors = []
for (let i= 0; i < allColors.length; i ++) {
	if (allColors[i].sexy==true) {
		sexycolors.push(allColors[i].label)
	}
}
return sexycolors
}

function generateHTMLFromArray(array){
	
	let filteredOptions = array.filter(filterColors);
	let LIs = filteredOptions.map(generateLI);

	let htmlString = '<ul>';
	LIs.forEach(function(elm){
		htmlString += elm;
	})
	htmlString += '</ul>';
	return htmlString;
}

console.log(generateHTMLFromArray(allColors));

