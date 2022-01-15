var chunk_one = [ 'Lebron', 'Aaliyah', 'Diamond', 'Dominique', 'Aliyah', 'Jazmin', 'Darnell' ];
var chunk_two = [ 'Lucas' , 'Jake','Scott','Amy', 'Molly','Hannah','Lucas'];

const mergeArrays = (firstArray, secondArray) => {
    let newArray = []
    //your code here
    for (let i = 0; i < chunk_one.length; i ++) {
        let elements = chunk_one[i]
        newArray.push(elements)
    }
    for (let j = 0; j< chunk_two.length; j ++) {
        let items = chunk_two[j]
        newArray.push(items)
    }
    return newArray
}

console.log(mergeArrays(chunk_one, chunk_two));