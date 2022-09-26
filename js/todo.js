const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //JSON.stringify() 이건 값을 string으로 저장하고 싶을 때 많이 사용할 것.
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); //toDo.id는 숫자고, li.id는 문자열 형식이라서 li.id를 int type으로 바꿔주기.
    saveToDos();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;

    const span = document.createElement("span");
    span.innerText = newTodo.text;
    span.addEventListener("click",checkingToDo);

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "deleteBtn";
    deleteBtn.innerText = "❌";
    deleteBtn.addEventListener("click", deleteToDo);
    
    li.appendChild(span); // li안에 span이 있도록 하는 것. li는 span이라는 자식을 가지게 됨.
    li.appendChild(deleteBtn);
    toDoList.appendChild(li);  //toDoList에 입력한 값이 출력되도록 넣는 것. 
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;  //input의 현재 value를 새로운 변수에 복사하는 것. 우리가 그 다음에 무엇을 하든 newTodo 변수와는 상관이 없음.
    // newTodo는 input의 value를 비우기 전의 값을 나타내는 string.
    toDoInput.value = "";
    const newTodoObj = {
        text:newTodo,
        id: Date.now(), //id로 각각 li item을 구분.
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj); //그런 다음 그 입력값을 paintToDo에 넣어서 호출하는 것. 
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null ) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo); //paintToDo는 텍스트를 받는데, js는 그 텍스트를 paintToDo에게 전달해주기 때문. 
        //forEach는 array의 각 item에 대해 function을 실행하게 해준다. 
}

function Filter() {
    return true //array의 item을 유지학고 싶으면 true를 리턴해야 함. 
}

[].filter(Filter);

function checkingToDo(event) {
    const span = event.path[0];
    span.classList.toggle("strikethrough");
  }

