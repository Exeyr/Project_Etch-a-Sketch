const container = document.querySelector('#container');

const etchDiv = document.createElement('div');
    etchDiv.setAttribute('id', 'etchDiv');

const etchContainer = document.createElement('div');
    etchContainer.setAttribute('id', 'etchContainer');

function generateGrid() {
    let XandY = prompt("Please enter the size of the grid you want to create", "16");
    XandYNum = parseInt(XandY);
    
    if (isNaN(XandYNum)) {
        alert("Please only enter numbers!");
    }
    
    else if (XandYNum > 27) {
        alert("Please keep the grid size to a maximum of 27");
    }
    
    else {
        createLines();
    }
}

function createLines() {
    if (document.getElementById('etchContainer') !== null) {
        container.innerHTML = '';
        for (let i = 0; i < (XandYNum); i++){
            cloneEtchContainer = etchContainer.cloneNode();
            container.appendChild(cloneEtchContainer);
            createItems();
            }
        
    }
    
    else {
        for (let i = 0; i < (XandYNum); i++){
        cloneEtchContainer = etchContainer.cloneNode();
        container.appendChild(cloneEtchContainer);
        createItems();
        }
    }
}

function createItems() {
    for (let i = 0; i < XandYNum; i++) {
        cloneEtchDiv = etchDiv.cloneNode();
        cloneEtchContainer.appendChild(cloneEtchDiv);
    }
}