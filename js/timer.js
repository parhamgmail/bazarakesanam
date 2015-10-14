var myVar = setInterval(function(){ myTimer() }, 6000);

function myTimer() {
	$('#gotopage2').html("<a style='display:none;' href='#page2' data-transition='slide'></a>");
	$('#gotopage2 a').click();	
	myStopFunction();
}

function myStopFunction() {
    clearInterval(myVar);
}