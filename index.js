var tobottom = document.getElementById("tobottom");
var id = null;
var delta;
var height;


function scrollToBottom(){
	var y = window.scrollY;
}

tobottom.addEventListener('click',function(event){
	delta = 5;
	height = window.scrollY;
	event.preventDefault();
	id = setInterval('scrollToBottom',10);

})