let list_of_numbers = [4, 80, 85, 59, 37,25, 5, 64, 66,	81,20, 64, 41, 22, 76,76, 55, 96, 2, 68];

// your code here

function mergeTwoList() {
    let isodd = []
    let iseven = [] 
    for (let i=0; i<list_of_numbers.length;i++) {
        let number = list_of_numbers[i]
        if (number %2 == 0) {
            iseven.push(number)
        }
        else {
            isodd.push(number)
        }
    }
    let finalarr = isodd.concat(iseven)
    return finalarr
}

console.log(mergeTwoList(list_of_numbers))
