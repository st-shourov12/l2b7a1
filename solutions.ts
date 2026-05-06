// problem 1
const filterEvenNumbers = (arr: number[]) => {
    const arr2 = arr.filter((i) :boolean => {
        return i % 2 === 0
    });
    return arr2 ;
}

console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));

// problem 2 
