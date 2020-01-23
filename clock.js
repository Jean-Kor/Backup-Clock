function changeTime(){
var d = new Date();
	var hrs = d.getHours();
	var mins = d.getMinutes();
	var secs = d.getSeconds();

	mins = (mins <10) ? "0" + mins : mins;
	secs = (secs <10) ? "0" + secs : secs;

var output = hrs +":" + mins +":" + secs;

document.getElementById("time").innerHTML = output;

}

setInterval(changeTime, 1000);

changeTime();


