
document.getElementById("display").innerHTML = 'Out put display';

document.querySelector('button').addEventListener('mouseenter', function($){
	document.querySelector('button').innerHTML='click me!';
});

document.querySelector('button').addEventListener('mouseleave', function($){
	document.querySelector('button').innerHTML='Hover me!';
});

document.querySelector('button').addEventListener('click', function(){
	document.querySelector('button').innerHTML='Thank you';
	var myvalue = parseInt(document.getElementById('value1').value) + parseInt(document.getElementById('value2').value);
	document.getElementById("display").innerHTML = 'Out put display : ' + myvalue;

	if(myvalue>75) {
		document.getElementById("display").style.background = 'green';
	}else if(myvalue>49&&myvalue<74) {
		document.getElementById("display").style.background = 'yellow';
	}
	else if(myvalue>24&&myvalue<50) {
		document.getElementById("display").style.background = '#000';
	}else {
		document.getElementById("display").style.background = 'red';
	}
});



