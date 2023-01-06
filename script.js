const X_CLASS = 'x';
const CIRCLE_CLASS = 'circle'
const cellElements = document.querySelectorAll('[data-cell]');
let circleTurn

cellElements.forEach(cell =>{
    cell.addEventListener('click', handleClick, {once:true})
});

function handleClick(e){
    const cell = e.target
    // PlaceMark
    // Check for Win
    // Check for draw
    // Switch Turns

}
