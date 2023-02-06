var color1 = document.querySelector("#color1");
var color2 = document.querySelector("#color2");
var body = document.getElementById("gradient");
var currentColor = document.querySelector("h3");


var button = document.createElement("button") ;
button.appendChild(document.createTextNode("Select Random Color"));
button.style.margin = "10px";
button.style.padding = "9px";
button.style.borderRadius = "20px";
body.appendChild(button);

//create randomcolor generator
function randomColor() {
	var color = 'rgb(' + (Math.floor(Math.random() * 256)) +
	','
	+ (Math.floor(Math.random() * 256)) + ','
	+ (Math.floor(Math.random() * 256)) + ')';
	return color;
}

function getRandomColor() {
	 var rndColor1 = randomColor();
	 var rndColor2 = randomColor();
	 body.style.background = "linear-gradient(to right, "
	 + rndColor1 
	 + ", "
	 + rndColor2
	 + ")";
	 currentColor.textContent = body.style.background + ";";
}


function setGradient() {
	body.style.background =
	"linear-gradient(to right, "
	+ color1.value
	+ ", "
	+color2.value
	+ ")";

	currentColor.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

//Match gradient color
color1.addEventListener("input", setGradient());

color2.addEventListener("input", setGradient());

button.addEventListener("click", getRandomColor);