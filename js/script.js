$(document).ready(function(){

	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function(){
		if(xhr.readyState === 4){
			document.getElementById('ajax').innerHTML = xhr.responseText;
		}
	};
	xhr.open('GET', 'cover-page.html');
	xhr.send();

});