// Press enter to add a task
document.querySelector('#typeTask')
    .addEventListener("keyup", function(event){
        event.preventDefault();
        if(event.keyCode === 13){
            document.getElementById('push').click();
        }
    });
// Adding a pop-up window to let someone know
//             they didn't fill out the input line
document.querySelector('#push').onclick = function(){
    if(document.querySelector('#newTask input').value.length == 0){
        alert("Please Enter a Task")
    }
    // Adding a new task
    else{
        document.querySelector('#tasks').innerHTML
        += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector
                    ('#newTask input').value}
                </span>
                <button class="delete">
                    <i class="ri-delete-bin-4-line"></i>
                </button>
            </div>
        `;
        // Deleting a task
        let current_tasks = document.querySelectorAll('.delete');
        for(let i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
        // Crossing off a completed task on your list
        let tasks = document.querySelectorAll("#taskname");
        for(let i=0; i<tasks.length; i++){
            tasks[i].onclick = function(){
                this.classList.toggle('completed');
            }
        }
        // Clearing the input field after each entry provided
        document.querySelector("#newTask input").value = "";
    }
}
