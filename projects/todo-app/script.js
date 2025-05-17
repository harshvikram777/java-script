// Function to create a new todo item
function addTodo() {
  const task = document.getElementById("todo-input").value;
  // const task = input.value.trim(); // Remove extra spaces

  if (task === "") {
    alert("Please enter a task!");
    return;
  }

  

  const li = document.createElement("li"); // Create <li>
  li.textContent = document.getElementById("todo-input").value;

  // Create delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "this is delete button";
  deleteBtn.onclick = function () {
    document.getElementById("todo-list").removeChild(li);
      };

  li.appendChild(deleteBtn); // Add button to li


  document.getElementById("todo-list").appendChild(li);
  document.getElementById("todo-input").value=""
}

// Add event listener for button
document.getElementById("add-btn").addEventListener("click", addTodo)


// Also add todo on pressing Enter key
document.getElementById("todo-input").addEventListener("keypress", function (e) {
 if(e.key == "Enter") {
    addTodo();
  }
}
);
