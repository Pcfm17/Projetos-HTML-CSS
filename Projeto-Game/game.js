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


function removeSelection() {
    document.querySelectorAll('.square').forEach(sq => sq.classList.remove('selected'));
}





function isValidMove(piece, fromIndex, toIndex) {
    const direction = piece === '♙' ? -1 : 1; // Define a direção do movimento para peões brancos e pretos
    const fromRow = Math.floor(fromIndex / 8);
    const toRow = Math.floor(toIndex / 8);
    const fromCol = fromIndex % 8;
    const toCol = toIndex % 8;

    if (piece === '♙' || piece === '♟') {
        // Movimento para frente
        if (fromCol === toCol && chessboard.children[toIndex].textContent === '') {
            if (toRow === fromRow + direction) {
                return true;
            }
            // Primeiro movimento do peão
            if ((piece === '♙' && fromRow === 6) || (piece === '♟' && fromRow === 1)) {
                if (toRow === fromRow + 2 * direction) {
                    return chessboard.children[fromIndex + direction * 8].textContent === '';
                }
            }
        }
        // Captura na diagonal
        if (Math.abs(fromCol - toCol) === 1 && toRow === fromRow + direction) {
            return chessboard.children[toIndex].textContent !== '';
        }
    }
    // Adicione regras para outras peças aqui

    return false;
}



function movePiece(square, index) {
    if (selectedSquare !== null && selectedPiece) {
        if (isValidMove(selectedPiece, selectedSquare, index)) {
            chessboard.children[selectedSquare].textContent = '';
            square.textContent = selectedPiece;
        }
        selectedPiece = null;
        selectedSquare = null;
        removeSelection();
    }
}


createBoard();