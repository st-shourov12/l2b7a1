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

type StringOrNumber = string | number ;

const checkType = (stn : StringOrNumber) => {
    if (typeof stn === "string") {
        return "String"
    }else if (typeof stn === "number"){
        return "Number"
    }
}
console.log(checkType(4555));


// problem 4 
// problem 5 
// problem 6 
// problem 7 
