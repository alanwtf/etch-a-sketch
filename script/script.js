const container = document.querySelector('#container');
const selectGrid = document.querySelector('#gridselect');
const clearButton = document.querySelector('#clearbtn');
const whack = document.querySelector('#whackybtn');

let isWhack = false;
let gridSize = 16;

whack.addEventListener('click', () =>{
    if(isWhack){
        isWhack = false;
        whack.innerHTML = "Whacky";
    } else {
        isWhack = true;
        whack.innerHTML = "Normal";
    }
});

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
            newDiv.style.backgroundColor = (isWhack) ? randomColor() : "black"
        );
        //newDiv.style.width = 500/gridSize+"px";
        container.appendChild(newDiv);
    }
}

function randomColor(){
    return `rgba(${generateColor()}, ${generateColor()}, ${generateColor()}, 1)`;
}

function generateColor(){
    return Math.random() * Math.floor(255);
}