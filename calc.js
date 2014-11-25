function display(current_number) {
	if (current_number.length === 0) {
		$("#display").text(0);
	} else {
  $("#display").text(current_number.join(""));
  }
}


function add(x, y) {
	return x + y;
} 


function subtract(x, y) {
	return x - y;
}


function multiply(x, y) {
	return x * y;
}


function divide(x, y) {
	return x / y;
}







$(document).ready(function(){
  
  var current_number = [];
  var previous_number = [];

  display(current_number);


  $(".number").click(function(){
  	
  	if (current_number.length < 10) {
  	  current_number.push($(this).attr("data"));
  	}

  	if (current_number[0] === "0") {
  		current_number = [];
  	}
    
  	display(current_number);
  });



  


  $("#clear").click(function() {
    current_number = [];
    display(current_number);
  });
  

});