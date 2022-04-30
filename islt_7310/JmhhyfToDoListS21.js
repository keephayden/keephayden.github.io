
// Code from TA's Help bellow

function toDoName(){
    var changeName = prompt("What do you want your title of list name to be?");
    
    if (changeName === ""){
        alert("You MUST enter a text!");
        toDoName();
    }
    else{
        document.title = changeName;
        document.getElementById("toDoTitle").innerHTML = changeName
    }
    
}

function light(){
    document.body.style.backgroundColor = "aliceblue";
    document.body.style.color = "steelblue";
    document.getElementById("toDoTitle").style.color = "steelblue";
    document.getElementById("toDoContainer").style.backgroundColor = "white";
    document.getElementById("tabBody").style.backgroundColor = "white";
    document.getElementById("tabBody").style.color = "black";
}
function dark(){
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    document.getElementById("toDoTitle").style.color = "white";
    document.getElementById("toDoContainer").style.backgroundColor = "black";
    document.getElementById("tabBody").style.backgroundColor = "black";
    document.getElementById("tabBody").style.color = "white";
}

var lightFlick = "light"

function lightNDark(){
    if (lightFlick === 'light'){
        dark();
        lightFlick = "dark";
        document.getElementById("dark-mode").innerHTML = "Theme: Dark";
    }
    else if(light === "dark"){
        light();
        lightFlick = "light";
        document.getElementById("dark-mode").innerHTML = "Theme: Light";
    }
    else{
        light();
        lightFlick = "light";
        document.getElementById("dark-mode").innerHTML = "Theme: Light";
    }
}


function clearForm(){
    document.getElementById("form").reset();
}

function rowDelete(cutRow){
    var r = cutRow.parentNode.parentNode;
    r.parentNode.removeChild(r);
}

function tableAdd(){
    
    
    var table = document.getElementById("tabBody");
    var row = "<tr><td>"   
    
    //table.insertRow(0);
//    var titleElement = row.insertCell(0);
//    var typeElement = row.insertCell(1);
//    var dateElement = row.insertCell(1);
//    var rangeElement = row.insertCell(1);
//    var actionElement = row.insertCell(1);
    
//    var actionButton = document.createElement("input");
//    actionButton.setAttribute("type","button");
//    actionButton.setAttribute("class", "cForm");
//    actionButton.setAttribute("value", "Done");
//    actionButton.setAttribute("onclick", "rowDelete(this)");
    
    
    //Code below from TA and https://stackoverflow.com/questions/11553768/remove-table-row-after-clicking-table-row-delete-button
    
    row = row + document.getElementById("title").value + "</td> <td>";
    row = row + document.getElementById("type").value + "</td> <td>";
    
    var selectedText = document.getElementById("date").value;
    var selectedDate = new Date(selectedText);
    var now = new Date();
    
    
//    else if ((selectedDate < now).checkValidity()) {
//        alert("Date must be in the future");
//    }
    
    
    
    row = row + document.getElementById("date").value + "</td> <td>";
    
    var priorityElement = document.getElementById("priority").value;
    var priorityResult = "";
    
    for (var i = 0; i < 6 ; i++){
        if (i < priorityElement){
            priorityResult += '<i class="bi bi-star-fill"></i>'; //filled star
        }
        else{
            priorityResult += '<i class="bi bi-star"></i>'; //empty star
        }
    }
    
    row = row + priorityResult + "</td> <td>";
    row = row + '<button onclick="rowDelete(this)">Remove</button> </tr>';
        
        // End of code from TA and https://stackoverflow.com/questions/11553768/remove-table-row-after-clicking-table-row-delete-button
    
    
    

//    if (selectedDate > now) {
//        table.innerHTML = table.innerHTML + row;
//    }
//    else{
//        alert("Date must be in the future");
//    }
    
    
    
    // Code below from TA's and https://stackoverflow.com/questions/27714469/check-if-date-is-in-the-past-without-submitting-form
    
    console.log(document.getElementById("form").checkValidity());
    
    if(document.getElementById("form").checkValidity()){
        table.innerHTML = table.innerHTML + row;
    }
    else if (selectedDate < now) {
        alert("Date must be in the future");
    }
    else{
        window.alert("All fields are required");
    }
    
    
    document.getElementById("form").reset();
    
}
    // End of code from https://stackoverflow.com/questions/27714469/check-if-date-is-in-the-past-without-submitting-form

function removeRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("tabBody").deleteRow(i);
}

    //End of code from the help of TA's
    
function nowLater(){
    var dater = document.getElementById("date");
    var tabTest = document.getElementById("title");
    
    console.dir(dater);
    console.dir(tabTest);
}






        // Other work 
//    if(isDark){
//        
//        var elements = document.getElementsByClassName("darkTheme");
//        
//        for(var i; i < elements.length; i ++){
//            elements[i].classList.toggle("darkTheme");
//            
//            elements[i].classList.toggle("lightTheme");
//            
//        }
//        
//        isDark = false;  
//    }
//     else{
//         var elements = document.getElementsByClassName("lightTheme");
//        
//        for(var i; i < elements.length; i ++){
//            elements[i].classList.toggle("lightTheme");
//            
//            elements[i].classList.toggle("darkTheme");
//            
//        }
//         isDark = true;
//     }
//    console.log(isDark);


//function getTitle(){
//    var titleElement = document.getElementById("title");
//    
//    console.dir(titleElement);
//}
//function getType(){
//    var typeElement = document.getElementById("type");
//    
//    console.dir(typeElement);
//}
//function getPriority(){
//    var rangeElement = document.getElementById("priority");
//    
//    console.dir(rangeElement);
//}
//function getDate(){
//    var dateElement = document.getElementsByName("date");
//    
//    console.dir(dateElement);
//}
