const tin = [];
const doughList = [];

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
        xButton.setAttribute("data-index", i);
        li.appendChild(editButton);
        li.appendChild(xButton);
        document.querySelector('#tin ul').appendChild(li);
    }

    document.querySelectorAll("#tin ul button:first-child").forEach(function(button){
        button.addEventListener("click", editInTin);
    });

    document.querySelectorAll("#tin ul button:last-child").forEach(function(button){
        button.addEventListener("click", removeFromTin);
    });
    
}

function displayDough(){
    document.querySelector('#factory ul').innerHTML = '';

    for (let i = 0; i < doughList.length; i++) {
        let li = document.createElement('li');
        li.innerText = tin[i];
        let editButton = document.createElement("button");
        let xButton = document.createElement("button");
        editButton.innerHTML = "&#x270f;";
        editButton.setAttribute("data-index", i);
        xButton.innerHTML = "&times;";
        xButton.setAttribute("data-index", i);
        li.appendChild(editButton);
        li.appendChild(xButton);
        document.querySelector('#tin ul').appendChild(li);
    }
    
    document.querySelectorAll("#factory ul button:first-child").forEach(function(button){
        button.addEventListener("click", editInDough);
    });
    
    document.querySelectorAll("#factory ul button:last-child").forEach(function(button){
        button.addEventListener("click", removeFromDough);
    });
}

function editInTin(){
}

function removeFromTin(){
}

function editInDough(){
}

function removeFromDough(){
}
