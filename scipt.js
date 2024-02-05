const oui = document.querySelector(".oui");
const non = document.querySelector(".non");
const img = document.querySelector("#img");
const txt = document.querySelector("#txt");

function yes() {
	img.src = "yes.gif";
	img.style.width = "12.05%";
	txt.innerHTML = "WAAAOUUUUHH BISSSSSSOUUUUUUS !!!<br><br>PS: je t'aime";
	oui.style.display = "none";
	non.style.display = "none";
}

function no() {
	var style = window.getComputedStyle(oui, null).getPropertyValue('font-size');
	var fontSize = parseFloat(style); 
	// now you have a proper float for the font size (yes, it can be a float, not just an integer)
	oui.style.fontSize = (fontSize * 2) + 'px';
}
