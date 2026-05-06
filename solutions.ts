// problem 1
const filterEvenNumbers = (arr: number[]) => {
    const arr2 = arr.filter((i) :boolean => {
        return i % 2 === 0
    });
    return arr2 ;
}

console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));

// problem 2 
const reverseString = (str:string) => {
    const reverseString = str.split("").reverse().join("").toString();
    return reverseString;
}

console.log(reverseString("typescript"));

// problem 3




// problem 4 
// problem 5 
// problem 6 
// problem 7 
