const tin = [];
const doughList = [];

document.querySelector('#add-tin').addEventListener('click', function () {
    const biscuit_inp = document.querySelector('#biscuit_input');
    const biscuit = biscuit_inp.value;
    biscuit.trim();
    if (biscuit.length !== 0) {
        tin.push(biscuit);
    }

    document.querySelector('#tin').innerHTML = '';

    for (let i = 0; i < tin.length; i++) {
        let li = document.createElement('li');
        li.innerText = tin[i];
        document.querySelector('#tin').appendChild(li);
    }
});


document.querySelector('#prep-dough').addEventListener('click', function () {
    const biscuit_inp = document.querySelector('#biscuit_input');
    const biscuit = biscuit_inp.value;
    biscuit.trim();
    if (biscuit.length !== 0) {
    doughList.push(biscuit);
}

    document.querySelector('#dough').innerHTML = '';

    for (let i = 0; i < doughList.length; i++) {
        let li = document.createElement('li');
        li.innerText = doughList[i];
        document.querySelector('#dough').appendChild(li);
    }
});