console.log('hello, world!');

function getFirstElement(arr : number[]) : (string | number) {
  return arr[0];
}

let result : string | number = getFirstElement([1,2,3]);
console.log(result)


function getElement<T>(arr : T[]) {
  return arr[0];
}

let numberArr  = getElement<number>([1,2,3]);
console.log(numberArr);


let stringArr  = getElement<string>(["one", "two", "three"]);
console.log(stringArr);


function swap <T>(a: T,b : T) : [T, T]{
  return [b, a];
}

let swapres = swap<string>("one","two");
console.log(swapres)


let swapres2 = swap<number>(1,2);
console.log(swapres2)


interface Todo {

  title: string;
  description: string,
  id: number;
  done:boolean
}

type UpdateTodoInput = Partial<Todo>;


function updateTodo(id:number,newProp: UpdateTodoInput) {

}
