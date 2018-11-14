let monImage = document.querySelector('img');

monImage.addEventListener('click', function() {
    let monSrc = monImage.getAttribute('src');
    if (monSrc === 'images/firefox.jpg') {
      monImage.setAttribute('src', 'images/firefox2.jpg');
    } else {
      monImage.setAttribute('src', 'images/firefox.jpg');
    }
});

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