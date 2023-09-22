const toDoForm = document.querySelector("#to-do-form")
const userInput = document.querySelector("#add-to-do");
const toDoList = document.querySelector("#to-do-list");

//add some event listeners
toDoForm.addEventListener("submit", addToDoItem);

//functions
function addToDoItem() {
    const toDoItem = userInput.value;

    //create a new list element
    //append the list element to the <ul>
}

//bonus
//add list to local storage
//retrieve your list from local storage