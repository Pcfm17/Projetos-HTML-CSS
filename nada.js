const chessboard = document.getElementById('chessboard');
const pieces = [
    '♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜',
    '♟', '♟', '♟', '♟', '♟', '♟', '♟', '♟',
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    '♙', '♙', '♙', '♙', '♙', '♙', '♙', '♙',
    '♖', '♘', '♗', '♕', '♔', '♗', '♘', '♖'
];

let selectedPiece = null;
let selectedSquare = null;

function createBoard() {
    for (let i = 0; i < 64; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.classList.add((Math.floor(i / 8) + i) % 2 === 0 ? 'white' : 'black');
        square.textContent = pieces[i];
        square.addEventListener('click', () => selectSquare(square, i));
        chessboard.appendChild(square);
    }
}

function selectSquare(square, index) {
    if (selectedPiece) {
        movePiece(square, index);
    } else if (square.textContent) {
        selectedPiece = square.textContent;
        selectedSquare = index;
        square.classList.add('selected');
    }
}

function movePiece(square, index) {
    if (selectedSquare !== null && selectedPiece) {
        chessboard.children[selectedSquare].textContent = '';
        square.textContent = selectedPiece;
        selectedPiece = null;
        selectedSquare = null;
        removeSelection();
    }
}

function removeSelection() {
    document.querySelectorAll('.square').forEach(sq => sq.classList.remove('selected'));
}

createBoard();