//input taking of the array.
const array=[1, 2, 3, 4, 5, 6]
let double=[];

//iteration over array to double the value of each elements using forEach function.
array.forEach(el => {
    //pushing the elements of double value in the extractedArray.
    double.push(el+el) 
});
//print heo double array.
console.log(double)