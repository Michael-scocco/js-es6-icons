/*
Milestone 1:
Partendo dalla seguente struttura dati ,
mostriamo in pagina tutte le icone disponibili come da layout.

Milestone 2 Coloriamo le icone per tipo
Milestone 3 Creiamo una select con i tipi di icone e usiamola per filtrare le icone
Usate questa struttura dati per le icone:
*/

// Milestone 1:
// Partendo dalla seguente struttura dati ,
// mostriamo in pagina tutte le icone disponibili come da layout.
const listaAnimali = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	}
];
// step 1
// mostriamo in pagina tutte le icone disponibili come da layout.

// step 2
// Coloriamo le icone per tipo
// const animal = [], vegetable = [], user = [], all = [];
let color;
listaAnimali.forEach((icona) => {
    if (icona.type == 'animal') {
         colore = 'blue';
    }else if (icona.type == 'vegetable') {
         colore = 'orange';
    }else {
         colore = 'purple';
    }
    document.getElementById('container').insertAdjacentHTML('beforeend',`
    <div class="icone animal vegetable user">
        ${icona.name}
        <i class="${icona.family} ${icona.prefix}${icona.name}" style="color: ${colore}"></i>
    </div>

    `)
});

// Milestone 3 Creiamo una select con i tipi di icone e usiamola per filtrare le icone
document.getElementById('tipologia').addEventListener('onchange', function () {

const selezionaTutti = colore(gatto=>{
    return colore === 'black'
})

const selezionaAnimali = colore(gatto=>{
    return colore === 'blue'
})
const selezionaVegetali = colore(gatto=>{
    return colore === 'orange'
})
const selezionaUser = colore(gatto=>{
    return colore === 'purple'
})

document.getElementById('tipologia').insertAdjacentHTML('beforeend',`
    <div class="selezione">
        <option value="All">All</option>
        <option value="animal">animal</option>
        <option value="vegetable">vegetable</option>
        <option value="user">user</option>
    </div>
    `)
});
