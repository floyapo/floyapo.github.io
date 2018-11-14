let monImage = document.querySelector('img');

monImage.addEventListener('click', function() {
	let monSrc = monImage.getAttribute('src');
	if (monSrc === 'images/firefox.jpg') {
		monImage.setAttribute('src', 'images/firefox2.jpg');	
	} else {
	  monImage.setAttribute('src', 'images/firefox2.jpg');
	}
});