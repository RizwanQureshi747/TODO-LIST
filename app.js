function addBtn() {
    
    // CREATE UNODER LIST
    var ulList = document.getElementById("ulList");
    
    
    // CREATE INPUT FILED
    var input = document.getElementById("input");
    
    // ALERT VALUE IS LESS THEN 3
    if (input.value.length < 3) {
        alert("Enter correct ToDo")
        return
    }
    
    // CREATE LIST
    var li = document.createElement("li");
    li.style.width = "80%"
    li.style.border = "1px solid black"
    li.style.padding = "10px"
    li.style.border = "none"
    li.style.backgroundColor = "white"
    li.style.fontFamily="sans-serif"
    li.innerHTML = input.value;
    
    
    // EDIT BUTTUN ONE LIST
    var editBtn = document.createElement("button");
    editBtn.innerHTML = "Edit";
    editBtn.style.position = "absolute"
    editBtn.style.right = "27%"
    editBtn.style.width = "50px"
    editBtn.style.height = "39px"
    editBtn.style.marginTop = "-10px"
    editBtn.style.backgroundColor = "orange"
    editBtn.style.Color = "white"
    editBtn.style.border = "none"
    editBtn.setAttribute("onClick", "editLi(this)")
    
    
    
    // DELETE BUTTUN ONE LIST
    var delBtn = document.createElement("button");
    delBtn.innerHTML = "Delete";
    delBtn.style.position = "absolute"
    delBtn.style.right = "13%"
    delBtn.style.height = "39px"
    delBtn.style.marginTop = "-10px"
    delBtn.style.backgroundColor = "red"
    delBtn.style.Color = "white"
    delBtn.style.border = "none"
    delBtn.setAttribute("onclick", ("delLi(this)"))
    
    
    // APPENDCHILED
    li.appendChild(editBtn);
    li.appendChild(delBtn);
    ulList.appendChild(li);
    
    // INPUT FILED IS EMPTY WHEN VALUE GONE TO UI
    input.value = ""
}


// SET PLACEHOLDER FONT-SIZE
    var placeholder = document.getElementById("input")
    input.getAttribute("placeholder")
    placeholder.style.fontSize="13px";
    placeholder.blur("outer")

// FUNCTION FOR INPUT FILED EMPTY WHEN CLICK ON X
function clearBtn() {
    var btn = document.getElementById("input")
    input.value = ""
}

// FUNCTION FOR DELETE ALL UI LIST
function delAll() {
    var delAll = document.getElementById("ulList")
    ulList.innerHTML = ""
}

// FUNCTION FOR DELETE ONE UI LIST
function delLi(ele) {
    ele.parentNode.remove()
}

// FUNCATION FOR EDIT BUTTON
function editLi(ele) {

    var editValue = prompt("Enter value", ele.previousSibling.nodeValue)
    ele.previousSibling.nodeValue = editValue

}

