
	
function bigger(){
	alert("Hello, world!");
	
	document.getElementById("fancytext").style.fontSize = "24px";
	document.getElementById("boringRadial").checked = false;
};

function fancySchmancy(){
	alert("Hello, world!");
	document.getElementById("fancytext").style.fontWeight = "bold";
	document.getElementById("boringRadial").checked = false;
	document.getElementById("fancytext").style.color = "blue";
	document.getElementById("fancytext").style.textDecoration = "underline";
	
};

function boringBetty(){
	alert("Hello, world!");
	document.getElementById("fancytext").style.fontWeight = "normal";
	document.getElementById("fancytext").style.fontSize = "12px";
	document.getElementById("fancyRadial").checked = false;
	document.getElementById("fancytext").style.color = "black";
	document.getElementById("fancytext").style.textDecoration = "none";
	document.getElementById("fancytext").style.textTransform = "none"
};

function moo(){
	
	document.getElementById("fancytext").style.textTransform = "uppercase";
	let originalvalue = document.getElementById("fancytext").value.split(".");
	
	document.getElementById("fancytext").value = "";
	originalvalue.forEach(appendMoo);
	
	document.getElementById("boringRadial").checked = false;
}

function appendMoo(item){
	let fancyWords = item.split(" ");
	let fancyValue = document.getElementById("fancytext").value;
	
	let hasWords = false;
	
	for ( let i = 0; i<fancyWords.length; i++){
		if(fancyWords[i].length > 0){
			hasWords = true;
		}
	}
	
	let fancyOut = "";
	
	if(hasWords){
		for ( let i = 0; i<fancyWords.length; i++){
			fancyOut = fancyOut + " " + fancyWords[i];
		}
		document.getElementById("fancytext").value = fancyValue+fancyOut+"-Moo.";
	}
	else{
		document.getElementById("fancytext").value = fancyValue+item+".";
	}
}