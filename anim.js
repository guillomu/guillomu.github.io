/*--------------- Barre de Chargement ---------------*/

var progress = document.querySelector(".progress");
var loading = document.getElementById("loading-background");
var width =  1;

var idInterval = setInterval(progressTick, 30);

function progressTick(){
	if(width > 100){
		clearInterval(idInterval);
		loading.style.opacity = '0';
		setTimeout(function(){loading.style.display = 'none';}, 1500);
	}
	else{
		progress.style.width = width + '%'; 
		progress.setAttribute('percentage', width + '%');
		width++;
	}
}
/*---------------------------------------------------*/


/*--------------- DETECTION DU SCROLL ---------------*/
var screens = document.querySelectorAll('body > div');
var i = 2;

//EventListener qui detecte quand la molette est activée
window.addEventListener('wheel', function(e) {

	if (e.deltaY < 0) {
		console.log('scrolling up');
		if(i > 2){i--;}
		screens[i].scrollIntoView({behavior: 'smooth'});
	}

	if (e.deltaY > 0) {
		console.log('scrolling down');
		if(i < 6){i++;}
		screens[i].scrollIntoView({behavior: 'smooth'});
	}
});

//EventListener qui detecte quand les fleches du clavier sont appuyeées
window.addEventListener('keydown', function(e) {

	if (e.keyCode == 38) {
		console.log('scrolling up');
		if(i > 2){i--;}
		screens[i].scrollIntoView({behavior: 'smooth'});
	}

	if (e.keyCode == 40) {
		console.log('scrolling down');
		if(i < 6){i++;}
		screens[i].scrollIntoView({behavior: 'smooth'});
	}
});


/*---------------------------------------------------*/

/*--------------- SCROLL AUTOMATIQUE ---------------*/
//Transition qui scroll d'un element à un autre de façon fluide
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function (e) {

		e.preventDefault();

		document.querySelector(this.getAttribute('href')).scrollIntoView({behavior: 'smooth'});
	});
});
/*---------------------------------------------------*/