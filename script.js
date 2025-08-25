function addContact() {
    taskName = names.value
    console.log(taskName);
    taskPhn = phone.value
    console.log(taskPhn);
    if (taskName == "" || taskPhn == "") {
        alert("Please fill the required")
    }
    else {
        let li = document.createElement('li')
        li.innerHTML = `
        <div class="flex justify-evenly items-center gap-4 block w-110 h-15 bg-blue-200 border-blue-300 rounded-lg" style="box-shadow: rgb(119, 119, 183) 5px 6px 8px;">
        <span class="textname">${taskName}</span>
        <span class ="textphone">${taskPhn}</span>
        <button type="button" onclick="editTask(this)"><i class="fa-solid fa-pen" style="color: #242821ff;"></i></button>
        <button type="button" onclick="deleteTask(this)"><i class="fa-solid fa-trash" style="color: #202327;"></i></button>
        </div>
        `
        taskList = document.querySelector('.taskList')
        taskList.appendChild(li)
        names.value = " "
        phone.value = " "
    }
}
function cancelContact() {
    alert("Discard your changes?")
    names.value = " "
    phone.value = " "
}

function editTask(button) {
    let container = button.parentNode;
    let taskName = container.querySelector(".textname")
    const currentName = taskName.textContent;
    const newName = prompt("Enter", currentName);

    let taskPhone = container.querySelector(".textphone")
    const currentPhone = taskPhone.textContent;
    const newPhone = prompt("Enter", currentPhone);

    if (newName !== null && newName.trim() !== "") {
        taskName.textContent = newName.trim();
    }
    if (newPhone !== null && newPhone.trim() !== "") {
        taskPhone.textContent = newPhone.trim();
    }
}

function deleteTask(button)
{
  alert("Are you sure you want to delete")
  li=button.closest('li')
  li.remove()
}

