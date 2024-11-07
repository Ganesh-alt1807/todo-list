//document.getElementById("addTodoBtn") selects the "Add Task" button from the HTML document by its id.

 // .addEventListener("click", addTodo) attaches a "click" event listener to the button. This means that whenever the button is clicked, it will trigger the addTodo function.

document.getElementById("addTodoBtn").addEventListener("click",addTodo);

function addTodo() {

  //const todoInput creates a constant variable named todoInput.

 // document.getElementById("todoInput") selects the input field where users type their tasks, using its id.

  //Now, todoInput holds a reference to the input field, allowing us to access its value.

  const todoInput = document.getElementById("todoInput");

  //const todoText creates a constant variable named todoText.

  //todoInput.value retrieves the current text inside the input field.

  //.trim() removes any leading or trailing spaces from the text, ensuring we don't accidentally add empty tasks.

  //Now, todoText contains the user-entered task text.

  const todoText = todoInput.value.trim();

  //if (todoText === "") checks if the user hasn't entered any text (i.e., todoText is an empty string).

  //alert("Please enter a task."); shows an alert box asking the user to enter some text.

  //return; exits the addTodo function immediately, so no empty task gets added to the list.

  if(todoText=== "") {
    alert("please enter a task");
    return;
  }

    //const todoList creates a constant variable named todoList.

  //document.getElementById("todoList") selects the <ul> element where we will display the list of tasks.

  //Now, todoList references the <ul> element, so we can add new tasks as list items.

  const todoList = document.getElementById("todoList");

  //const li = document.createElement("li"); creates a new <li> (list item) element.

  //li.textContent = todoText; sets the text content of this <li> element to the value of todoText, which is the task text entered by the user.

  const li = document.createElement("li");
  li.textContent = todoText;

  //const deleteBtn creates a new constant variable to hold a "Delete" button.

  //document.createElement("button"); creates a new <button> element.

  //deleteBtn.textContent = "Delete"; sets the text on this button to "Delete".

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";

  //deleteBtn.addEventListener("click", ...) adds a "click" event listener to the "Delete" button.

  //() => { li.remove(); } defines an arrow function that runs when the button is clicked. This function calls li.remove(), which deletes the corresponding <li> element from the list. Essentially, it removes the task when the "Delete" button is clicked.

  deleteBtn.addEventListener("click", () => {
    li.remove();
});
  //li.appendChild(deleteBtn); appends the "Delete" button to the new <li> element, so each task item will have its own "Delete" button.
  //todoList.appendChild(li); appends the <li> element (with the task text and delete button) to the <ul> element. This makes the new task appear on the list.
  li.appendChild(deleteBtn);
  todoList.appendChild(li);

  //todoInput.value = ""; clears the input field by setting its value to an empty string
  //This allows the user to type a new task without needing to manually delete the previous text

  todoInput.value = "";
}