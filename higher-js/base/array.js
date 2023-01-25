const baseObj = {name: 'wxs', count: 111}
const array1 = new Array(20).fill(baseObj)
console.log(array1)


const array2 = ['a', 'b', 'c', 'd', 'e'];

// copy to index 0 the element at index 3
console.log(array2.copyWithin(0, 3, 4));
console.log(array2)
console.log(array2.copyWithin(1, 3));

const baseArrayObj = [
    {id: 0, name: 'wxs0', age: 18},
    {id: 1, name: 'wxs1', age: 19},
    {id: 2, name: 'wxs2', age: 20},
]
// baseArrayObj.copyWithin(0, 1, 2)
// console.log(baseArrayObj)

for (const [index,value] of array2.entries()) {
    console.log(index,value)
}


