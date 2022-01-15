let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let counts = {};

// your code here

let  parnospace = par.replace(/\s/g, '')
let arrletter = parnospace.split("")
//console.log(letter);

for ( let i= 0; i<= arrletter.length; i++) {
    const letter = arrletter[i].toLowerCase()
    if (counts[letter] == undefined) counts[letter] = 1;
    else counts[letter] = counts[letter] + 1;
}

console.log(counts);