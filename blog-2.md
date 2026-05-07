# How do `Generics` allow you to build reusable components and functions that stay strictly typed regardless of the data structures passed in?

## Generics

Generics means passing type as parameter and making code reuseable for multiple type without sacrificing type safety.

We can use generics array following the below code ; 

```typescript
// dynamically generalize

type GenericArray<T> = Array<T>

// const friends : string[] = ['A','B','C'];
// const friends : Array<string> = ['A','B','C'];
const friends : GenericArray<string> = ['A','B','C'];

// const rollNumbers : number[] = [1,2,3,4,5,6,7,8,9];
// const rollNumbers : Array<number> = [1,2,3,4,5,6,7,8,9];
const rollNumbers : GenericArray<number> = [1,2,3,4,5,6,7,8,9];

// const isEligible : boolean[] = [true , false ,false, true];
// const isEligible : Array<boolean> = [true , false ,false, true];
const isEligible : GenericArray<boolean> = [true , false ,false, true];


// const sqrFnc = (value : number) => console.log(value * value);

// sqrFnc(9);

// type Coordinates = [number , number] ;
type Coordinates<X, Y> = [X , Y] ;
const coordinates  : Coordinates<number , number> = [55, 66];
const coordinates2  : Coordinates<string , string> = ['55', '66'];

console.log(coordinates, coordinates2);


// from module 2.3
```
Following the code: we can write variable using `const friends : Array<string> = ['A','B','C'];`. But the variable is specific for array of string. 
If we use generics array using `type GenericArray<T> = Array<T>` . We can use this type for multiple variable whether its string, number or rest of the types. Just we have to declare type in `T` .

we can use it for tuple as we used in `Coordinates` . Here `X, Y` are the types variable. 


### generics for object : 
```typescript

type GenericObj<X> = Array<X>

const userList : GenericObj<{name : string ; age: number}> = [
    {
        name : 'A',
        age : 22 
    },
    {
        name : 'B',
        age : 22
    }
]

console.log(userList);

```

### generics function

```typescript

// normal use of calling function
const creatArrayWithString = (value : string) => [value];
const creatArrayWithNumber = (value : number) => [value];
const creatArrayWithUserObj = ( value : {
    id : number ,
    name : string
}) => {
    return [value]
};

//generics function
const creatArrayWithGeneric = <T>(value : T) => [value]

const arrStr = creatArrayWithString('Apple');
const arrNum = creatArrayWithNumber(25);
const arrObj = creatArrayWithUserObj ({
    id : 123 ,
    name : 'X'
})

const arrGenStr = creatArrayWithGeneric('Shourov');
const arrGenNum = creatArrayWithGeneric(15);
const arrGenObj = creatArrayWithGeneric({
    id : 123 ,
    name : 'X'
})



// tuple

// const fnc = (name : string = 'shourov' , age : number = 0 ) =>{
//     return {
//         name , age
//     }
// }

// console.log(fnc('S'));

const creatArrayTupleWithGeneric = <X,Y>(value1 : X, value2: Y ) => {
    return [value1, value2]
}

const tuple = creatArrayTupleWithGeneric("X", 2)


console.log({arrStr, arrNum , arrObj, arrGenStr, arrGenNum, arrGenObj, tuple});

// from the module 2.5
```

We can use generics in function `const creatArrayWithGeneric = <T>(value : T) => [value]`
Here `T` is the type variable for parameter. We can use it for multiple type like the code. 
We can use multiple type variable in one function using tuple like `creatArrayTupleWithGeneric`.

Without generics we have to call separate function for every type.
Using Generics we can call multiple type with one function.



