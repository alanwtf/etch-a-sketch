const container = document.querySelector('#container');
const selectGrid = document.querySelector('#gridselect');
const clearButton = document.querySelector('#clearbtn');
let gridSize = 16;

selectGrid.addEventListener('change', () => {
    gridSize = selectGrid.value;
    
    createCanvas();
    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr`;
    
});

clearButton.addEventListener('click', createCanvas);



function createCanvas(){
    while(container.firstChild){
        container.removeChild(container.lastChild);
    }
    let totalPixels = gridSize * gridSize;
    
    for(let i = 0; i < totalPixels; i++){
        let newDiv = document.createElement('div');
        newDiv.classList.add('grid-pixel');
        newDiv.addEventListener('mouseover', () => 
            newDiv.style.backgroundColor = "black"
        );
        //newDiv.style.width = 500/gridSize+"px";
        container.appendChild(newDiv);
    }
}

function randomColor(){
    return
}