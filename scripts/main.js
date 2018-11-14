let monImage = document.querySelector('img');

let monBouton = document.querySelector('button');
let monTitre = document.querySelector('h1')
function définirNomUtilisateur() {
	let monNom = prompt('Veuillez saisir votre nom.');
	localStorage.setItem('nom', monNom);
	monTitre.textContent = 'Mozilla est cool, ' + monNom;
}
if (!localStorage.getItem('nom')) {
	définirNomUtilisateur();
}	else {
	let nomEnregistré = localStorage.getItem('nom');
	monTitre.textContent = 'Mozilla est cool, ' + nomEnregistré
}

monBouton.addEventListener('click', function() {
	définirNomUtilisateur();
});
