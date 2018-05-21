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
var highlight = document.getElementById('highlight');
var i = 2;

//EventListener qui detecte quand la molette est activée
window.addEventListener('wheel', function(e) {

	if (e.deltaY < 0) {
		console.log('scrolling up');
		if(i > 2){ i--; }
		highlight.style.top = screens[i].getAttribute('menu-hl');
		screens[i].scrollIntoView({behavior: 'smooth'});
	}

	if (e.deltaY > 0) {
		console.log('scrolling down');
		if(i < 6){ i++; }
		highlight.style.top = screens[i].getAttribute('menu-hl');
		screens[i].scrollIntoView({behavior: 'smooth'});
	}
});

//EventListener qui detecte quand les fleches du clavier sont appuyeées
window.addEventListener('keydown', function(e) {

	if (e.keyCode == 38) {
		console.log('scrolling up');
		if(i > 2){i--;}
		highlight.style.top = screens[i].getAttribute('menu-hl');
		screens[i].scrollIntoView({behavior: 'smooth'});
	}

	if (e.keyCode == 40) {
		console.log('scrolling down');
		if(i < 6){i++;}
		highlight.style.top = screens[i].getAttribute('menu-hl');
		screens[i].scrollIntoView({behavior: 'smooth'});
	}
});


/*---------------------------------------------------*/

/*--------------- SCROLL AUTOMATIQUE ---------------*/
//Transition qui scroll d'un element à un autre de façon fluide
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function (e) {

		e.preventDefault();

		highlight.style.top = document.querySelector(this.getAttribute('href')).getAttribute('menu-hl');
		document.querySelector(this.getAttribute('href')).scrollIntoView({behavior: 'smooth'});
	});
});
/*---------------------------------------------------*/

/*--------------- ANIMATION DES CAMENBERTS---------------*/
function $$(selector, context) {
	context = context || document;
	var elements = context.querySelectorAll(selector);
	return Array.prototype.slice.call(elements);
} 

 $$('.pie').forEach(function(pie) {
	var p = parseFloat(pie.textContent);
	var NS = "http://www.w3.org/2000/svg";
	var svg = document.createElementNS(NS, "svg");
	var circle = document.createElementNS(NS, "circle");
	var title = document.createElementNS(NS, "title");
	
	circle.setAttribute("r", 16);
	circle.setAttribute("cx", 16);
	circle.setAttribute("cy", 16);
	circle.setAttribute("stroke-dasharray", p + " 100");
	
	svg.setAttribute("viewBox", "0 0 32 32");
	title.textContent = pie.textContent;
	pie.textContent = '';
	svg.appendChild(title);
	svg.appendChild(circle);
	pie.appendChild(svg);
});
/*---------------------------------------------------*/