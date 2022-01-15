let names = ['Liam','Emma','Noah','Olivia','William','Ava','James','Isabella','Logan','Sophia','Benjamin','Mia','Mason','Charlotte','Elijah','Amelia','Oliver','Evelyn','Jacob','Abigail','Lucas','Harper','Michael','Emily','Alexander','Elizabeth','Ethan','Avery','Daniel','Sofia','Matthew','Ella','Aiden','Madison','Henry','Scarlett','Joseph','Victoria','Jackson','Aria','Samuel','Grace','Sebastian','Chloe','David','Camila','Carter','Penelope','Wyatt','Riley'];

//declare your function here

let filterByName = function(names,b){
    let namesnew = []
    for (let i = 0; i<names.length; i++) {
        let name = names[i].toLowerCase()
        if (name.includes(b)) {
            namesnew.push(name)
        }
    }
    return namesnew
}


console.log(filterByName(names, 'am'));


//let filterByName = names.filter(function(name){
    //return name.includes('am')
//})
//console.log(filterByName);