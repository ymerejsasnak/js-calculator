function display(current_number) {
	if (current_number.length === 0) {
		$("#display").text(0);
	} else if (current_number.length > 10) {
    $("#display").text("OVERFLOW");
  }	else {
  $("#display").text(current_number.join(""));
  }
}


//converts array of string 'numbers' into actual number for the math
function convert(number_array) {
	if (number_array.length === 0) {
		return 0;
	} else {
		number = number_array.join("");
    number = parseInt(number);
    return number;
  }
}


//reverts back to array of string numbers
function revert(number) {
  return (String(number)).split("")
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
  var operator = "";

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



  $(".operator").click(function() {
  	previous_number = current_number;
    current_number = [];
    operator = $(this).attr("id");
  });



  $("#equals").click(function() {
  	switch(operator) {
    	case "add":
     	  current_number = add(convert(previous_number), convert(current_number));
     	  break;
     	case "sub":
     	  current_number = subtract(convert(previous_number), convert(current_number));
     	  break;
     	case "mul":
     	  current_number = multiply(convert(previous_number), convert(current_number));
     	  break;
     	case "div":
     	  current_number = divide(convert(previous_number), convert(current_number));
     	  break;
    }
    
    if (operator != "") {
    	current_number = revert(current_number);
      operator = "";
    }
    
    display(current_number);
  });

  

  $("#clear").click(function() {
    current_number = [];
    display(current_number);
  });
  

});