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

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
const user = { id: 1, name: "John Doe", age: 21 };
console.log(getProperty(user, "name"));


// problem 5 

interface Book {
    title : string;
    author: string;
    publishedYear : number;
    // isRead? :  boolean ;
}

const toggleReadStatus = (obj : Book) : {} => {

    return {
        ...obj,
        isRead : true
    }
}
const myBook = { title: "TypeScript Guide", author: "Jane Doe", publishedYear: 2024 };
toggleReadStatus(myBook);
console.log(toggleReadStatus(myBook));

// problem 6 

class Person {
    constructor(public Name :string , public Age : number){

    }
}

class Student extends Person {
    constructor (public Name :string , public Age : number, public Grade : string){
        super(Name, Age)
    }
    getDetails () {
        return (`Name: ${this.Name}, Age:${this.Age}, Grade:${this.Grade}`)
    }
}

const student = new Student("Alice", 20, "A");
console.log(student.getDetails());

// problem 7 

const getIntersection = (arr1 :number[], arr2:number[]) => {
    if (arr1.length >= arr2.length) {
       const arr = arr1.filter((item) => arr2.includes(item))
       return arr;
    }else if (arr2.length >= arr1.length) {
       const arr = arr2.filter((item) => arr1.includes(item))
       return arr;
    }
    

}

const x = getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]);
console.log(x);




