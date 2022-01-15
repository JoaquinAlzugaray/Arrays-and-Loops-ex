let allNames = ["Romario","Boby","Roosevelt","Emiliy", "Michael", "Greta", "Patricia", "Danzalee"];

//your code here

let resultingNames = allNames.filter (function(name){
    return (name.includes('R'))  
})

console.log(resultingNames);