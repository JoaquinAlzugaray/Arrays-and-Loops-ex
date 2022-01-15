var people = ['juan','ana','michelle','daniella','stefany','lucy','barak', 'emilio'];

//your code below

function deletePerson(name){
    let newpeople = people.filter((element) => element !== name)
    return newpeople
}

console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));
