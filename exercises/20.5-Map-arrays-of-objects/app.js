let people = [
	{ name: 'Joe', birthDate: new Date(1986,10,24) },
	{ name: 'Bob', birthDate: new Date(1975,5,24) },
	{ name: 'Erika', birthDate: new Date(1989,6,12) },
	{ name: 'Dylan', birthDate: new Date(1999,12,14) },
	{ name: 'Steve', birthDate: new Date(2003,4,24) }
];

let simplifier = function(person){
	let frase1 = 'Hello, my name is '
	let name = person.name
	let frase2 = ' and I am '
	let frase3 = ' years old'
	let year = person.birthDate.getFullYear()
	let age = 2022 - year
	return frase1 + name + frase2 + age + frase3
};

console.log(people.map(simplifier));
