
// sorry for using var, local storage didn't work with const
var tin = [];
var doughList = [];

if (localStorage){
    const storage = localStorage.getItem("biscuit");
    if (storage){
        let biscuit = JSON.parse(storage); //get string from storage and convert into JS object and arrays
        tin = biscuit.tin;
        doughList = biscuit.doughList;
        displayTin();
        displayDough();
    }
}

document.querySelector('#add-tin').addEventListener('click', function () {
    const biscuit_inp = document.querySelector('#biscuit_input');
    const biscuit = biscuit_inp.value;
    biscuit_inp.value = "";
    biscuit_inp.focus();
    biscuit.trim();
    if (biscuit.length !== 0) {
        tin.push(biscuit);
    }

    displayTin();
});


document.querySelector('#prep-dough').addEventListener('click', function () {
    const biscuit_inp = document.querySelector('#biscuit_input');
    const biscuit = biscuit_inp.value;
    biscuit_inp.value = "";
    biscuit_inp.focus();
    biscuit.trim();
    if (biscuit.length !== 0) {
        doughList.push(biscuit);
    }

    displayDough();
});

function displayTin(){
    document.querySelector('#tin ul').innerHTML = '';

    for (let i = 0; i < tin.length; i++) {
        let li = document.createElement('li');
        li.innerText = tin[i];
        let editButton = document.createElement("button");
        let xButton = document.createElement("button");
        editButton.innerHTML = "&#x270f;";
        editButton.setAttribute("data-index", i);
        xButton.innerHTML = "&times;";
        xButton.setAttribute("data-index", i); //custom HTML attribute holding index in tin array
        li.appendChild(editButton);
        li.appendChild(xButton);
        document.querySelector('#tin ul').appendChild(li);
    }

    //all the edit buttons
    document.querySelectorAll("#tin ul button:first-child").forEach(function(button){
        button.addEventListener("click", editInTin);
    });

    //all the delete buttons
    document.querySelectorAll("#tin ul button:last-child").forEach(function(button){
        button.addEventListener("click", removeFromTin);
    });

    //update localStorage
    if (localStorage){
        let biscuitString = JSON.stringify({tin, doughList}); //create object, then convert to a string
        localStorage.setItem("biscuit", biscuitString);
    }
    
}

function displayDough(){
    document.querySelector('#factory ul').innerHTML = '';

    for (let i = 0; i < doughList.length; i++) {
        let li = document.createElement('li');
        li.innerText = doughList[i];
        let editButton = document.createElement("button");
        let xButton = document.createElement("button");
        editButton.innerHTML = "&#x270f;";
        editButton.setAttribute("data-index", i);
        xButton.innerHTML = "&times;";
        xButton.setAttribute("data-index", i);
        li.appendChild(editButton);
        li.appendChild(xButton);
        document.querySelector('#factory ul').appendChild(li);
    }
    
    document.querySelectorAll("#factory ul button:first-child").forEach(function(button){
        button.addEventListener("click", editInDough);
    });
    
    document.querySelectorAll("#factory ul button:last-child").forEach(function(button){
        button.addEventListener("click", removeFromDough);
    });

    //update localStorage
    if (localStorage){
        let biscuitString = JSON.stringify({tin, doughList}); //create object, then convert to a string
        localStorage.setItem("biscuit", biscuitString);
    }
}

function editInTin(event){
    //event.target.getAttribute("data-index") is the index attribute for that button.
    let index = Number(event.target.getAttribute("data-index"));
    let text = tin[index];
    let input = document.querySelector("#biscuit_input");
    input.value = text;
    input.focus();
    removeFromTin(event);
}

function removeFromTin(event){
    let index = Number(event.target.getAttribute("data-index"));
    tin.splice(index, 1);
    displayTin();
}

function editInDough(event){
    let index = Number(event.target.getAttribute("data-index"));
    let text = doughList[index];
    let input = document.querySelector("#biscuit_input");
    input.value = text;
    input.focus();
    removeFromDough(event);
}

function removeFromDough(event){
    let index = Number(event.target.getAttribute("data-index"));
    doughList.splice(index, 1);
    displayDough();
}
