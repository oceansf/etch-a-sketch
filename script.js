const container = document.querySelector('.container');
const newGridBtn = document.querySelector('#newGridBtn');

let numOfGridItems = 16;

// Generate 16x16 grid on start
function generateGrid(num) {
    for (let i = 1; i <= num; i++) {
        for (let i = 1; i <= num; i++) {
            const gridItem = document.createElement('div');
            gridItem.classList.add('gridItem', 'itemOpacity');
            gridItem.style.height = `${960 / num}px`;
            gridItem.style.width = `${960 / num}px`;
            container.appendChild(gridItem);
            let opacity = 100;
            gridItem.addEventListener('mouseover', () => {
                container.style.backgroundColor = 'black'
                gridItem.style.backgroundColor = `rgba(${randomRgbColor()},${opacity}%)`;
                opacity = opacity - 10;
            });
        };
    };
};
generateGrid(numOfGridItems);

// Remove old grid and prompt for new one with dimensions defined by user
const makeNewGrid = newGridBtn.addEventListener('click', () => {
    const clearContainer = () => {container.innerHTML = ''; container.style.backgroundColor = 'white'};
    let numOfGridItems = Number(window.prompt('Enter a number of squares per side for the new grid (No less than 1, no more than 100).'));
    if (numOfGridItems > 1 && numOfGridItems < 100) {
        clearContainer();
        generateGrid(numOfGridItems);
    } else if (numOfGridItems >= 100) {
        alert('Please enter a number that is less than 100.');
    } else if (numOfGridItems <= 1) {
        alert('Please enter a number higher than 1.');
    } else {
        alert('Please enter a valid number')
    };
});

// Generate random RBG color
function randomRgbColor() {
    function randomInteger(max) {
        return Math.floor(Math.random()*(max + 1));
    }    
    let r = randomInteger(255);
    let g = randomInteger(255);
    let b = randomInteger(255);
    return [r,g,b];
}
