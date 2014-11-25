function display() {
	if (first_number.length === 0) {
		$("#display").text(0);
	} else {
  $("#display").text(first_number.join(""));
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



var first_number = [];  //these are global for now, but should switch once i figure out 'current number' and 'prev number' issues
var second_number = [];



$(document).ready(function(){
  
  display();


  $(".number").click(function(){
  	
  	if (first_number.length < 10) {
  	  first_number.push($(this).attr("data"));
  	}

  	if (first_number[0] === "0") {
  		first_number = [];
  	}
    
  	display();
  });



  
  

});