
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
let tipologia = [];
listaAnimali.forEach((icona) => {
    if (icona.type == 'animal') {
         colore = 'blue';
    }else if (icona.type == 'vegetable') {
         colore = 'orange';
    }else {
         colore = 'purple';
    }
    document.getElementById('container').insertAdjacentHTML('beforeend',`
    <div class="icone provola" data-type="${icona.type}">
        ${icona.name}
        <i class="${icona.family} ${icona.prefix}${icona.name}" style="color: ${colore}"></i>
    </div>
    `)

	if(!tipologia.includes(icona.type)){
		tipologia.push(icona.type)
	}
});

tipologia.forEach(element => {
	console.log(document.getElementById('tipologia'));
	document.getElementById('tipologia').insertAdjacentHTML('beforeend',
	
	`<option value='${element}'>${element} </option>`
	
	);

});




let provolaEl= document.querySelectorAll('.provola');


	let selection = document.getElementById('tipologia');
	console.log(selection);


// Milestone 3 Creiamo una select con i tipi di icone e usiamola per filtrare le icone
selection.addEventListener('change', ()=>{

	provolaEl.forEach(el=>{
		if(selection.value=='all') {
			el.style.display ="block";
			console.log("mostra tutto");
			
		} else if(el.getAttribute('data.type')==selection.value){
			el.style.display="block";
			console.log("visibile");
			
		}else{
			el.style.display="none";
			console.log("non-visibile");

		}


	});




});


