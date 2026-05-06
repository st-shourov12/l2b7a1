

## any 
We use Typescript for type safety. But when we use `any` type, it allows every type. Which is not a safer choice. `any` means it checked nothing. So its never handle unpredictable data.

if we use `any` it allows everything. So we can call every method, which can crash on runtime . Thats called type safety hole. We use typescript for type safety and catch the error before the runtime . But any cant do anything of them; which means my using typescript is going to be in vain . 

## unknown
Instead we can use `unknown` for safer choice. When we use `unknown`, firstly it checks the type then it decides is this safe or unsafe for use. If the data is unsafe it instantly blocked it. 

The differnces between `any` and `unknown` are : `any` does not check the type , `unknown` does it . 


## type narrowing
type narrowing means it can get specific type from broad type ,

```typescript
type Alphaneumeric = number | string ;

const add = (num1 : Alphaneumeric , num2:Alphaneumeric) => {
    if (typeof num1 === "number" && typeof num2 === "number") {
        return num1 + num2
    }else {
       return num1.toString()  + num2.toString()
    }
}

console.log(add(5,9));        // output 14
console.log(add(5,'9'));      // output 59
console.log(add('5',9));      // output 59
console.log(add('5','9'));    // output 59

// from the module 3.3
```

In this code we used type guard method. There firstly we used Alphaneumeric type for 'add' function, so that add function can take the argument if it was string or number. Then we used if else condition so that it can operate addition for number and concat for string. By adding condition we narrowing the type of function parameter .

We can use instanceof guard.

```typescript
class Person {
    name : string ;
    constructor (name: string) {
        this.name = name
    }
    getSleep(num : number){
        console.log(`${this.name} sleep ${num} hours daily`);
    }
}

class Student extends Person {
    constructor(name : string){
        super(name)
    }
    doStudy(num : number){
        console.log(`${this.name} read ${num} hours daily`);
    }
}




class Teacher extends Person {
    takeClass(numOfHour : number) {
        console.log(`${this.name} take class ${numOfHour} hours daily`);
    }
}


const isTeacher = (user: Person) => {
    return user instanceof Teacher
}

const getUserInfo = (user : Person) =>{
    // normal practice
    if (user instanceof Student) {
        user.doStudy(4)
    }
    // best practice
    else if (isTeacher(user)) {
        user.takeClass(6)
    }else{
        user.getSleep(9)
    }
}

const student1 = new Student("Shourov");
const teacher1 = new Teacher('Abul');
const user1 = new Person('Mokbul');
getUserInfo(teacher1)
getUserInfo(user1)

// from module 3.5
```

Here we called Person class. Then we extend Student and Teacher class with Person class so that the specific information could be go on smoothly . But in the getUserInfo function we narrowing the type using instanceof guard and called specific function. 


