$(document).ready(function(){


	

});

/*-------------------MAKING THE FIRST AJAX CALL --------------------*/
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){
	if(xhr.readyState === 4){
		document.getElementById('ajax').innerHTML = xhr.responseText;
	}
};
xhr.open('GET', 'cover-page.html');
function sendAjax(){
	xhr.send();
	document.getElementById('call-ajax').style.display = 'none';
};

//Go Back
function goBack(){
	window.open('index.html', '_self', false);
}

