$( document ).ready(function() {
	var btn1 = document.getElementById('btnNavigate1');
	btn1.onclick = btnNavigate1Click;

	var btn2 = document.getElementById('btnNavigate2');
	btn2.onclick = btnNavigate2Click;

	var btn3 = document.getElementById('btnNavigate3');
	btn3.onclick = btnNavigate3Click;
});

function btnNavigate1Click(event) {
	var frame = document.getElementById('iframe1');
	frame.src = "http://teched-lunchtime.azurewebsites.net";
};

function btnNavigate2Click(event) {
	var frame = document.getElementById('iframe1');
	frame.src = "http://www.wikipedia.org";
};

function btnNavigate3Click(event) {
	var frame = document.getElementById('iframe1');
	frame.src = "http://msgnotify.azurewebsites.net/sitea.html";
};