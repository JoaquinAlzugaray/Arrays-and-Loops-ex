var mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];

//your code here

let type = []

for (let i = 0; i<mix.length; i ++) {
    let item = mix[i]
    let vartype = typeof (item)
    type.push(vartype)
}

console.log(type);