var img = document.getElementsByClassName("bannerImg");
var imgBox = document.getElementsByClassName("imgBox");
var next = document.getElementsByClassName("next")[0];
var up = document.getElementsByClassName("up")[0];
var spotBox = document.getElementsByClassName("spotBox")[0];
var spot = document.getElementsByClassName('spot');
var index = 0;
for (let i = 0; i < img.length; i++) {
	spotBox.innerHTML = spotBox.innerHTML + "<div class='spot'></div>";
}

function clearSPoticolor() {
	for (let t = 0; t < spot.length; t++) {
		spot[t].classList.remove('spotcolor');
	}
	spot[index].classList.add('spotcolor');
}
clearSPoticolor();
for (let i = 0; i <= spot.length - 1; i++) {
	spot[i].onclick = function() {
		index = i;
		clearSPoticolor();
		imgBox[0].style.left = (index * -100) + "%";
		clearInterval(interval);
		startInterval();
	}
}

function potion() {
	if (index >= img.length - 1) {
		index = 0;
		imgBox[0].style.left = (index * -100) + "%";
	} else {
		index++;
		imgBox[0].style.left = (index * -100) + "%";
	}
	clearSPoticolor();
}
next.onclick = function() {
	index++;
	
	if (index > img.length - 1) {
		index = 0;
		imgBox[0].style.left = (index * -100) + "%";
	} else {
		imgBox[0].style.left = (index * -100) + "%";
	}clearSPoticolor();
	clearInterval(interval)
	startInterval();

}
up.onclick = function() {
	
	if (index==0) {
		index = img.length - 1;
		imgBox[0].style.left = (index * -100) + "%";
	} else {
		index--;
		imgBox[0].style.left = (index * -100) + "%";
	}clearSPoticolor();
	clearInterval(interval)
	startInterval();

}

interval = setInterval(function() {
	potion();
}, 4000)

function startInterval() {
	interval = setInterval(function() {
		potion();
	}, 4000)
}
