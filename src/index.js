import './styles.css';
import { getRandomInt, ready } from "./utils";

let secretNumber;
let squares;

function doIt() {
    //console.log('Up and Running');
    //find all the squares.
    squares = document.querySelectorAll('.square');
    //on each of them, have something happen when they click
    let squareNumber = 1;
    squares.forEach(function (square) {
        square.addEventListener('click', handleClick);
        square.dataset.number = squareNumber.toString();
        squareNumber++;

    });
    //get a random number.
    secretNumber = getRandomInt(1, 6);
    console.log('The Secret is', secretNumber);
}

function handleClick(evt) {
    // console.log(this);
    if (parseInt(this.dataset.number) === secretNumber) {
        this.classList.add('winner');
        const currentSquare = this;
        squares.forEach(function(square){
        //remove the click handlers from everything,
            square.removeEventListener('click',handleClick);

        //make the non-winners gray
        if(square !== currentSquare){
            square.classList.add('loser');
        }
        }
        )

    } else {
        this.classList.add('loser');
    }
    // console.log('That tickled');
    console.log('You Win!');
}


ready(doIt);