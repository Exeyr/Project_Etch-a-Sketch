const btn = document.createElement('button');
    body.appendChild(btn);
    btn.setAttribute('id', 'button');

const container = document.querySelector('#container');

const etchDiv = document.createElement('div');
    etchDiv.setAttribute('id', 'etchDiv');

btn.onclick = generateGrid();

function generateGrid() {
    let XandY = prompt("Please enter the size of the grid you want to create", "16");
    XandYNum = parseInt(XandY);
    
    if (isNaN(XandYNum)) {
        alert("Please only enter numbers!");
    }
    
    else {
        for (let i = 0; i < (XandYNum * XandYNum); i++){
            cloneEtchDiv = etchDiv.cloneNode();
            container.appendChild(cloneEtchDiv);
            
        }

    }
}