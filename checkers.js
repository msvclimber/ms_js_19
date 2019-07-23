const boardGame = [];
initBoard(boardGame)

function initBoard(bg) {
  const board = document.querySelector(".board");
  const fieldsPart = 90;

  //рисуем контур поля
  const fieldsOffset = (100 - fieldsPart) / 2;
  const fields = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  fields.setAttribute('width', `${fieldsPart}%`);
  fields.setAttribute('height', `${fieldsPart}%`);
  fields.setAttribute('stroke', 'black');
  fields.setAttribute('x', `${fieldsOffset}%`);
  fields.setAttribute('y', `${fieldsOffset}%`);
  board.appendChild(fields);

  //рисуем поля
  const w = fieldsPart / 8
  for(let i = 0; i < 8 ; i++){
    bg[i] = []
    for(let j = 0; j < 8; j++) {
      const field = document.createElementNS("http://www.w3.org/2000/svg", "rect");
      field.setAttribute('class', 'field');
      field.setAttribute('fill', (i+j) % 2 === 0 ? '#FAEBD7' : '#000')
      field.setAttribute('width', `${w}%`);
      field.setAttribute('height', `${w}%`);
      field.setAttribute('x', `${i * w + fieldsOffset}%`);
      field.setAttribute('y', `${j * w + fieldsOffset}%`);
      board.appendChild(field);
      bg[i][j] = field;
    }
  }

  ['a', 'b', 'c', 'd', 'i', 'f', 'g', 'h'].forEach((char, i) => {
    board.appendChild(newChar((i * 11.4) + 9, 98.9, char));
    board.appendChild(newChar(((7 - i) * 11.4) - 91, -1.3, char, true));
  });
  
  ['1', '2', '3', '4', '5', '6', '7', '8'].forEach((d, i) => {
    board.appendChild(newChar(1.3, ((7 - i) * 11.3) + 12, d));
    board.appendChild(newChar(-98.7, (i * 11.3) - 88, d, true));
  })

  function newChar(x, y, ch, updown) {
    const c = document.createElementNS("http://www.w3.org/2000/svg", "text");
    c.innerHTML = ch;
    if(updown){
      c.setAttribute('transform', `rotate(180)`);
    }
    c.setAttribute('x', `${x}%`);
    c.setAttribute('y', `${y}%`);
    c.setAttribute('font-size', `4vmin`);
    return c;
  }
}

