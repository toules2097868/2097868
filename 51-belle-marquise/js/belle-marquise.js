const VIRGULE = ', '
const tableau = [
    'belle Marquise',
    'vos beaux yeux',
    'me font mourir',
    'd\'amour'
]


let phrase1 = tableau[0] + VIRGULE + tableau[1] + VIRGULE + tableau[2] + VIRGULE + tableau[3];
let phrase2 = tableau[1] + VIRGULE + tableau[0] + VIRGULE + tableau[3] + VIRGULE + tableau[2];
let phrase3 = tableau[3] + VIRGULE + tableau[2] + VIRGULE + tableau[0] + VIRGULE + tableau[1];
let phrase4 = tableau[2] + VIRGULE + tableau[0] + VIRGULE + tableau[3] + VIRGULE + tableau[1];


document.write('<ul style="list-style-type: disc;">');
document.write('<li>' + phrase1 + '</li>');
document.write('<li>' + phrase2 + '</li>');
document.write('<li>' + phrase3 + '</li>');
document.write('<li>' + phrase4 + '</li>');
document.write('</ul>');
