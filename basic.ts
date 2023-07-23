export function greet(person: {
    name:string,
    age:number
}): string {
  return "Hello" + person.name + "glad that you are " + person.age + " years old"
}

console.log(greet({
    name:"mahesh",
    age:25
}))

//use interface
interface Person {
    name:string;
    age:number
}

export function greet2(person:Person):string {
    return "Hello" + person.name + "glad that you are " + person.age + " years old"
}

const personData: Person = {
    name: "John",
    age: 30,
  };
  

console.log(greet2(personData))

interface PersonInterface {
    name: string;
    age: number;
    greet():string
}

class PersonTest implements PersonInterface {

    name: string;
    age:number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet() : string{

        return "hi";
    }
}