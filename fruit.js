let fruit = ['apples', 'bananas', 'oranges'];
let number = [1, 2, 3, 4];
let mixedArr = ['hello', 123, true, {first_name: 'john'}, ['coding']];
console.log(mixedArr);
console.log(mixedArr[3]);
console.log(fruit.constructor);
//Array method
let newarr = fruit.concat(number);
console.log(newarr);
//push method
fruit.push("water Melon", "Guava");
//removes the last element
fruit.pop();
fruit.push("Mango");
//remove the first element
fruit.shift()
//add to the beginning of the array
fruit.unshift("Guava", "water melon");
//splice. This is used to change the content of the array by removing existing elements and or adding new elements in place.
//it takes three parameter
fruit.splice(2, 4, "Mango");
fruit.push("Apple");

//slice method. Returns a shallow copy of a portion of an array into a new array object
let sliceditem = fruit.slice(1, 2);
console.log(sliceditem);

//include method. Determines whether an array includes a certain value among its elements returning true or false as appropriate
let presentFruit = fruit.includes("shawasour");
console.log(presentFruit);

//loop from 10 to 100
for(let i=0; i<=100; i=i+10){
    console.log(i);
}

//for each loop
fruit.forEach(n=>{
    console.log(n)
})

for(let i of fruit){
    console.log(fruit[i]);
}

//map method. the map() 
let number2 = [1, 2, 3, 4];
let result = number2.map(n=>n/2);
console.log(result);

//using map to multiply the n value in an array by 3
let result2 = number2.map(n=>n*3);
console.log(result2);

//filter method. the filter() method creates a new array with elements that pass a test implemented by the provided function. Its useful for filtering out elements based on certqain criteria
let evenNumber = number2.filter(n => n % 2 == 0)
console.log(evenNumber);


