function changeTime(){
var d = new Date();
	var hrs = d.gethours();
	var mins = d.getminutes();
	var secs = d.getseconds();

	mins = (mins <10) ? "0" + mins : mins;
	secs = (secs <10) ? "0" + secs : secs;

var output = hrs +":" + mins +":" + secs;

document.getElementById("time");

}

setInterval(changeTime, 1000);

changeTime();


