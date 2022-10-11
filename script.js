const container = document.querySelector('#container');

function generateGrid() {
    let XandY = prompt("Please enter the size of the grid you want to create", "16");
    XandYNum = parseInt(XandY);
    
    if (isNaN(XandYNum)) {
        alert("Please only enter numbers!");
    }
    
    else if (XandYNum > 100) {
        alert("Please keep the grid size to a maximum of 100");
    }
    
    else {
        createGrid();
    }
}

function createGrid() {
    container.setAttribute('style', `grid-template-columns: repeat(${XandYNum}, 2fr); grid-template-rows: repeat(${XandYNum}, 2fr);`);
    if (document.getElementById('container') !== null) {
        container.innerHTML = '';
        for (let i = 0; i < (XandYNum * XandYNum); i++){
            const etchDiv = document.createElement('div');
            etchDiv.classList.add('etchDiv');
            etchDiv.addEventListener('mouseover', function(event){
                event.target.style.backgroundColor = 'black';
            
        })
        container.appendChild(etchDiv); 
    }
        } else {
            for (let i = 0; i < (XandYNum * XandYNum); i++){
                const etchDiv = document.createElement('div');
                etchDiv.classList.add('etchDiv');
                etchDiv.addEventListener('mouseover', function(event){
                    event.target.style.backgroundColor = 'black';
                
            })
            container.appendChild(etchDiv);
            }
        
    }
}

const RGB = document.querySelector('#RGB');
RGB.addEventListener('click', function colorRandomizer() {
    let XandY = prompt("Please enter the size of the grid you want to create", "16");
    XandYNum = parseInt(XandY);
    
    if (isNaN(XandYNum)) {
        alert("Please only enter numbers!");
    }
    
    else if (XandYNum > 100) {
        alert("Please keep the grid size to a maximum of 100");
    }
    
    else {
        container.setAttribute('style', `grid-template-columns: repeat(${XandYNum}, 2fr); grid-template-rows: repeat(${XandYNum}, 2fr);`);
        if (document.getElementById('container') !== null) {
            container.innerHTML = '';
            for (let i = 0; i < (XandYNum * XandYNum); i++){
                const etchDiv = document.createElement('div');
                etchDiv.classList.add('etchDiv');
                etchDiv.addEventListener('mouseover', function(event){
                    event.target.style.backgroundColor = randomColor();
                
            })
            container.appendChild(etchDiv); 
        }
            } else {
                for (let i = 0; i < (XandYNum * XandYNum); i++){
                    const etchDiv = document.createElement('div');
                    etchDiv.classList.add('etchDiv');
                    etchDiv.addEventListener('mouseover', function(event){
                        event.target.style.backgroundColor = randomColor();
                    
                })
                container.appendChild(etchDiv);
                }
        
    }
    }
});

function randomColor() {
    let codes = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
        color += codes[Math.floor(Math.random() * 16)];
    }
    return color;
}

function Reset() {
    let val = 16;
    container.setAttribute('style', `grid-template-columns: repeat(${val}, 2fr); grid-template-rows: repeat(${val}, 2fr);`);
    if (document.getElementById('container') !== null) {
        container.innerHTML = '';
        for (let i = 0; i < (val*val); i++){
            const etchDiv = document.createElement('div');
            etchDiv.classList.add('etchDiv');
            etchDiv.addEventListener('mouseover', function(event){
                event.target.style.backgroundColor = 'black';
            
        })
        container.appendChild(etchDiv); 
        }
    }else {
        for (let i = 0; i < (val*val); i++){
            const etchDiv = document.createElement('div');
            etchDiv.classList.add('etchDiv');
            etchDiv.addEventListener('mouseover', function(event){
                event.target.style.backgroundColor = 'black';
        })
        container.appendChild(etchDiv); 
        }  
    }  
}

generateGrid();