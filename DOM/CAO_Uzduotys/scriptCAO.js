// https://codeacademy.online/dashboard/modules/js2/2ubneM38T2D7PZHNscis/131235906

// Teksto elemento kūrimas
// Susikurkite projektą, be jokių HTML elementų <body> viduje. 
// Sukurkite funkciją createTextElement, kuri sukuria ir grąžina naują DOM elementą p su pateiktu tekstu  ir pridėkite į <body>.
// CAO Atsakymas
function createTextElement(text) {
    const p = document.createElement('p');
    p.textContent = text;
    return p;}
document.body.appendChild(createTextElement("Sveiki, tai naujas paragrafas!"));

// Elemento atnaujinimas
// Sukurkite HTML faile <h1> žymą su id="name" ir tekstu "unknown". Naudodami JavaScript pakeiskite šio elemento tekstą į savo vardą .
/*const addedH1 = document.createElement('h1')
addedH1.textContent = 'unknown'
console.dir(addedH1)
*/
// CAO Atsakymas:
//HTML
//<h1 id="name">unknown<h1>

const name = 'Milana';
document.getElementById('name').textContent = name;

// Klaida DOM’e
// Nusikopijuokite apačioje esantį kodą ir su JavaScript pasikeiskite antrame paragrafe esantčio <span> tekstą - iš 'red' į 'blue':
// <p class="redtext">This text will be in <span>red</span></p>
// <p class="bluetext">This text will be in <span>red</span></p>
// <p class="yellowtext">This text will be in <span>yellow</span></p>

// CAO Atsakymas:
document.querySelector('.bluetext > span').textContent = 'blue';

// Automobilių gamintojų sąrašas
// Sukurkite ordered list su trimis list item duota eilės tvarka: "BMW group", "VW group" ir "GE".
// <ol>
//   <li>BMW group</li>
//   <li>VW group</li>
//   <li>GE</li>
// </ol>
// Naudodami JavaScript apkeiskite pirmus du sąrašo elementus vietomis. Tačiau, kabliukas - negalima JavaScript įrašyti testo (kitaip tariant hard-codinti). Pirma, Jūs turite pasiimt pirmo ir antro sąrašo elemento reikšmes ir jas išsisaugoti į kintamuosius.

// CAO Atsakymas:
const firstListItem = document.querySelector('li:first-child');
const secondListItem = document.querySelector('li:nth-child(2)');

const bmw_group = firstListItem.textContent;
const vw_group = secondListItem.textContent;

firstListItem.textContent = vw_group;
secondListItem.textContent = bmw_group;

// Prekių sąrašas
// Sukurkite funkciją createList, kuri priima masyvą su tekstu ir sukuria DOM ul elementą su li vaikais, atitinkančiais masyvo elementus.
// Pavyzdys, kaip galime naudoti šią funkciją:
// document.body.appendChild(sukurtiSarasa(["Pienas", "Duona", "Kiaušiniai"]));
// CAO Atsakymas:

 list = ["Pienas", "Duona", "Kiaušiniai"]

 function createList(items) {
    const ul = document.createElement('ul');
    items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        ul.appendChild(li);
    });
    return ul;
}

// Tic-Tac-Toe laimėtojo nustatymas
// Jūs turite HTML dokumentą su 3x3 Tic-Tac-Toe žaidimo dydžio lentelę. Kiekvienas lentelės langelis (<td>) turi būti pažymėtas arba "X", arba "O". Sukurkite JavaScript funkciją highlightWinner, kuri patikrina, ar yra trys vienodi ženklai iš eilės (eilutėje, stulpelyje arba įstrižainėje) ir, jei taip, nuspalvina atitinkamas lentelės eilutę, stulpelį, arba įstrižainę.
// HTML struktūra
// <table id="tictactoe">
// 	<tr>
// 		<td>X</td>
// 		<td>O</td>
// 		<td>O</td>
// 	</tr>
// 	<tr>
// 		<td>O</td>
// 		<td>X</td>
// 		<td>O</td>
// 	</tr>
// 	<tr>
// 		<td>X</td>
// 		<td>O</td>
// 		<td>X</td>
// 	</tr>
// </table>
// CAO Atsakymas:

function highlightWinner() {
    const board = document.querySelectorAll('#tictactoe tr');
    const matrix = Array.from(board, row => Array.from(row.cells, cell => cell.textContent));
  
    function checkAndHighlight(cells, indices) {
      if (cells[0] !== '' && new Set(cells).size === 1) {
        indices.forEach(([row, col]) => board[row].cells[col].style.backgroundColor = 'lightgreen');
        return true;
      }
      return false;
    }
  
    // Check rows and columns
    for (let i = 0; i < 3; i++) {
      const row = matrix[i];
      const col = matrix.map(row => row[i]);
  
      if (checkAndHighlight(row, [[i, 0], [i, 1], [i, 2]])) return;
      if (checkAndHighlight(col, [[0, i], [1, i], [2, i]])) return;
    }
  
    // Check diagonals
    const diag1 = [matrix[0][0], matrix[1][1], matrix[2][2]];
    const diag2 = [matrix[0][2], matrix[1][1], matrix[2][0]];
  
    if (checkAndHighlight(diag1, [[0, 0], [1, 1], [2, 2]])) return;
    if (checkAndHighlight(diag2, [[0, 2], [1, 1], [2, 0]])) return;
  }
  
  highlightWinner();
 

