//Course: SENG 513
//Date: Nov 13, 2023
//Assignment 3
//Anmol Rana
//30159019


document.addEventListener('DOMContentLoaded', function () {
    colorChessboardSquares();
    addStartingPieces();
});

//Colors the chessboard with default colors
function colorChessboardSquares() {
    const squares = document.querySelectorAll('.square');

    squares.forEach(function (square) {
        getID = square.id;
        //console.log(square);
        arr = Array.from(getID);
        b = parseInt(arr.pop());
        
        c = parseInt(eval(arr.join('')));
        a = b + c;
        if (a % 2 == 0) {
            square.style.backgroundColor = '#f0d9b5';
        }
        if (a % 2 !== 0) {
            square.style.backgroundColor = '#b58863';
        }
    });
}

//adds starting pieces to the board for both black and white
function addStartingPieces() {
    var startingPositions = [
        //Add white pieces
        { row: 8, column: '1', piece: 'rook', color: 'black' },
        { row: 8, column: '2', piece: 'knight', color: 'black' },
        { row: 8, column: '3', piece: 'bishop', color: 'black' },
        { row: 8, column: '4', piece: 'queen', color: 'black' },
        { row: 8, column: '5', piece: 'king', color: 'black' },
        { row: 8, column: '6', piece: 'bishop', color: 'black' },
        { row: 8, column: '7', piece: 'knight', color: 'black' },
        { row: 8, column: '8', piece: 'rook', color: 'black' },

        { row: 7, column: '1', piece: 'pawn', color: 'black' },
        { row: 7, column: '2', piece: 'pawn', color: 'black' },
        { row: 7, column: '3', piece: 'pawn', color: 'black' },
        { row: 7, column: '4', piece: 'pawn', color: 'black' },
        { row: 7, column: '5', piece: 'pawn', color: 'black' },
        { row: 7, column: '6', piece: 'pawn', color: 'black' },
        { row: 7, column: '7', piece: 'pawn', color: 'black' },
        { row: 7, column: '8', piece: 'pawn', color: 'black' },

        //Add black pieces
        { row: 2, column: '1', piece: 'pawn', color: 'white' },
        { row: 2, column: '2', piece: 'pawn', color: 'white' },
        { row: 2, column: '3', piece: 'pawn', color: 'white' },
        { row: 2, column: '4', piece: 'pawn', color: 'white' },
        { row: 2, column: '5', piece: 'pawn', color: 'white' },
        { row: 2, column: '6', piece: 'pawn', color: 'white' },
        { row: 2, column: '7', piece: 'pawn', color: 'white' },
        { row: 2, column: '8', piece: 'pawn', color: 'white' },

        { row: 1, column: '1', piece: 'rook', color: 'white' },
        { row: 1, column: '2', piece: 'knight', color: 'white' },
        { row: 1, column: '3', piece: 'bishop', color: 'white' },
        { row: 1, column: '4', piece: 'queen', color: 'white' },
        { row: 1, column: '5', piece: 'king', color: 'white' },
        { row: 1, column: '6', piece: 'bishop', color: 'white' },
        { row: 1, column: '7', piece: 'knight', color: 'white' },
        { row: 1, column: '8', piece: 'rook', color: 'white' }
    ];

    startingPositions.forEach(function (position, index) {
        var squareId = position.row.toString() + position.column;
        var square = document.getElementById(squareId);

        if (square) {
            var pieceElement = document.createElement('li');
            var className = position.color + position.piece;
            pieceElement.classList.add('square', className);
            pieceElement.setAttribute('data-pawn-id', index); // Unique identifier using index
            square.appendChild(pieceElement);
        }
    });
}

toggle = 1;

//pieces logic
document.querySelectorAll('.square').forEach(item => {

    item.addEventListener('click', function(){

        getId = item.id
        arr = Array.from(getId)
        b = parseInt(arr.pop());
        arr.push('0')
        arr.push('0')
        
        c = parseInt(eval(arr.join('')));
        a = b + c;
        b = parseInt(item.id);

        //function to display the available paths for all pieces

        function whosTurn(toggle){
            var whitePawns = item.querySelectorAll('.whitepawn');
            var blackPawns = item.querySelectorAll('.blackpawn');

            // Pawn logic
            if (whitePawns.length > 0 || blackPawns.length > 0 ) {
                item.style.backgroundColor = 'blue';
                
                if (toggle % 2 !== 0 && c < 700) {
                    // First move for white pawns
                    if (document.getElementById(`${b + 10}`).innerText.length == 0) {
                        document.getElementById(`${b + 10}`).style.backgroundColor = 'greenyellow';
                        if (document.getElementById(`${b + 20}`).innerText.length == 0 && c < 300) {
                            document.getElementById(`${b + 20}`).style.backgroundColor = 'greenyellow';
                        }
                    }
                    if (b < 8 && document.getElementById(`${b + 10 + 1}`).innerText.length !== 0) {
                        document.getElementById(`${b + 10 + 1}`).style.backgroundColor = 'greenyellow';
                    }
                    if (b > 1 && document.getElementById(`${b + 10 - 1}`).innerText.length !== 0) {
                        document.getElementById(`${b + 10 - 1}`).style.backgroundColor = 'greenyellow';
                    }
                }

                if (toggle % 2 == 0 && c > 500) {
                    // First move for black pawns
                    if (document.getElementById(`${b - 10}`).innerText.length == 0) {
                        document.getElementById(`${b - 10}`).style.backgroundColor = 'greenyellow';
                        if (document.getElementById(`${b - 20}`).innerText.length == 0 && c > 600) {
                            document.getElementById(`${b - 20}`).style.backgroundColor = 'greenyellow';
                        }
                    }
                    if (b < 8 && document.getElementById(`${b - 10 + 1}`).innerText.length !== 0) {
                        document.getElementById(`${b - 100 + 1}`).style.backgroundColor = 'greenyellow';
                    }
                    if (b > 1 && document.getElementById(`${b - 10 - 1}`).innerText.length !== 0) {
                        document.getElementById(`${b - 10 - 1}`).style.backgroundColor = 'greenyellow';
                    }
                }
                // Second move for pawns
                if (toggle % 2 !== 0 && c >= 800) {
                    if (document.getElementById(`${b + 10}`).innerText.length == 0) {
                        document.getElementById(`${a + 10}`).style.backgroundColor = 'greenyellow';
                    }
                    if (b < 8 && document.getElementById(`${b + 10 + 1}`).innerText.length !== 0) {
                        document.getElementById(`${b + 10 + 1}`).style.backgroundColor = 'greenyellow';
                    }
                    if (b > 1 && document.getElementById(`${b + 10 - 1}`).innerText.length !== 0) {
                        document.getElementById(`${b + 10 - 1}`).style.backgroundColor = 'greenyellow';
                    }
                }
                if (toggle % 2 == 0 && c <= 100) {
                    if (document.getElementById(`${b - 100}`).innerText.length == 0) {
                        document.getElementById(`${b - 100}`).style.backgroundColor = 'greenyellow';
                    }
                    if (b < 8 && document.getElementById(`${b - 10 + 1}`).innerText.length !== 0) {
                        document.getElementById(`${b - 100 + 1}`).style.backgroundColor = 'greenyellow';
                    }
                    if (b > 1 && document.getElementById(`${b - 10 - 1}`).innerText.length !== 0) {
                        document.getElementById(`${b - 10 - 1}`).style.backgroundColor = 'greenyellow';
                    }
                }
            }
        }

        // Toggling the turn

        if (toggle % 2 !== 0) {
            document.getElementById('tog').innerText = "White's Turn"
            whosTurn('white')
        }
        if (toggle % 2 == 0) {
            document.getElementById('tog').innerText = "Black's Turn"
            whosTurn('black')
        }

        friendlyFire()
    })
})

// Moving the element
document.querySelectorAll('.square').forEach(x => {

    x.addEventListener('click', function () {

        if (x.style.backgroundColor == 'blue') {

            blueId = x.id
            blueText = x.innerText

            document.querySelectorAll('.square').forEach(x1 => {

                x1.addEventListener('click', function () {
                    if (x1.style.backgroundColor == 'greenyellow' && x1.innerText.length == 0) {
                        document.getElementById(blueId).innerText = ''
                        x1.innerText = blueText
                        colorChessboardSquares();
                        insertImage();

                    }

                })
            })

        }

    })

})

//Insert image of every chess piece once one of them moves. Chaning innerText of each square to contain the piece name
function insertImage() {
    document.querySelectorAll('.square').forEach(image => {
        if (image.innerText.length !== 0) {
            if (image.innerText == 'whitepawn' || image.innerText == 'blackpawn') {
                image.innerHTML = `${image.innerText} <img class='all-img all-pown' src="pictures/${image.innerText}.png" alt="">`
                image.style.cursor = 'pointer'
            }
            else {
                image.innerHTML = `${image.innerText} <img class='all-img' src="pictures/${image.innerText}.png" alt="">`
                image.style.cursor = 'pointer'
            }
        }
    })
}


// Prvents from selecting multiple elements
z = 0
document.querySelectorAll('.square').forEach(target => {
  target.addEventListener('click', function () {
      z = z + 1
      if (z % 2 == 0 && target.style.backgroundColor !== 'greenyellow') {
        colorChessboardSquares();
      }
  })
})


//reset button
document.getElementById("reset-button").addEventListener("click", function () {
    location.reload();
});


//function check_move()
//function checks if a move is legal or not
//illegal eg. capture own pieces, wrong movements of the unique pieces, king is in check etc

//function king_check()
//function checks if a players king is in check after a legal move

//function checkmate()
//checks for checkmate after every move 

//function graveyard()
//updates the graveyard after every capture

//function promote()
//when pawns reach the endzone they can promote to one of each piece: Queen, Bishop, Knight, Rook

//function win()
//victory message for the player who wins after checkmate