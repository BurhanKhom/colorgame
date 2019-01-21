reset();
var colors = document.querySelectorAll(".square");
for(var i=0; i<colors.length; i++)
{
	colors[i].addEventListener("click", function(){
		if(this.style.background == document.querySelector("#guessThis").textContent)
		{
			var n=3;
			if(document.querySelector("#mode").textContent == " Easy")
				n=6;
			for(var i=0; i<n; i++)
			{
				colors[i].classList.add("square");
				colors[i].classList.remove("fade");
				colors[i].style.background = this.style.background;
				document.querySelector(".guessed").style.background = this.style.background;
				document.querySelector("#status").textContent = "Correct! :D";
			}
		}
		else
		{
			this.classList.add("fade");
			document.querySelector("#status").textContent = "Uh Oh! Try Again :)";
		}
	});
}
var nc = document.querySelector("#new_colors");
nc.addEventListener("click", reset);

var mode = document.querySelector("#mode");
var toggle=true;
mode.addEventListener("click", function(){reset(); tog();});

function reset(){
	var colors = document.querySelectorAll(".square");
	document.querySelector(".guessed").style.background = "#FFFFFF";
	document.querySelector("#status").textContent = "";
	for(var i=0; i<colors.length; i++)
	{
		var r = parseInt(Math.random()*255+1);
		var g = parseInt(Math.random()*255+1);
		var b = parseInt(Math.random()*255+1);
		colors[i].style.background = 'rgb('+r+','+g+','+b+')';
	}
	var sq=6;
	if(document.querySelector("#mode").textContent == " Hard")
		sq=3;
	var guessThis = colors[Math.floor(Math.random()*sq+1)];
	console.log(guessThis);
	var gtDisplay = document.querySelector("#guessThis");
	gtDisplay.textContent = guessThis.style.background;
}
function tog()
{
	var togAllOfThese = document.querySelectorAll(".sqhard");
	for(var i=0; i<3; i++)
		togAllOfThese[i].classList.toggle("fade");
	var m = document.querySelector("#mode");
	if(m.textContent == " Easy")
		m.textContent = " Hard"	
	else
		m.textContent = " Easy";
}