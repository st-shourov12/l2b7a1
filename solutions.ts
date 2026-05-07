// problem 1
const filterEvenNumbers = (arr: number[]) => {
    const arr2 = arr.filter((i) :boolean => {
        return i % 2 === 0
    });
    return arr2 ;
}



// problem 2 
const reverseString = (str:string) => {
    const reversedString = str.split("").reverse().join("").toString();
    return reversedString;
}



// problem 3

type StringOrNumber = string | number ;

const checkType = (stn : StringOrNumber) => {
    if (typeof stn === "string") {
        return "String"
    }else if (typeof stn === "number"){
        return "Number"
    }
}



// problem 4 

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}




// problem 5 

interface Book {
    title : string;
    author: string;
    publishedYear : number;
    isRead? : boolean
    
}

const toggleReadStatus = (obj : Book)  : Book  => {

    return {
        ...obj,
        isRead : !obj?.isRead
    }
}


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
        return (`Name: ${this.Name}, Age: ${this.Age}, Grade: ${this.Grade}`)
    }
}




// problem 7 

const getIntersection = (arr1 :number[], arr2:number[]) => {
    if (arr1.length >= arr2.length) {
       const arr = arr1.filter((item) => arr2.includes(item))
       return arr;
    }else if (arr2.length > arr1.length) {
       const arr = arr2.filter((item) => arr1.includes(item))
       return arr;
    }
}







