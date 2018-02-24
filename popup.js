var sec = 0;
function pad (val) {
	return val > 9 ? val : "0" + val;
}
var startTimer = setInterval(function() {
	document.getElementById("seconds").innerHTML=pad(++sec%60);
	document.getElementById("minutes").innerHTML=pad(parseInt(Math.floor(sec/60,10)));
	document.getElementById("hours").innerHTML=pad(parseInt(Math.floor(sec/3600,10)));
}, 1000);

function stopTimer() {
	clearInterval(startTimer);
}

document.getElementById("stop").addEventListener("click", stopTimer);