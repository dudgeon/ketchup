console.log("JS Working");

Parse.initialize("vy8mFo5X9Nuc74yHH6ECTrvrYiLubLXlHrThliAe", "hPBzmhAbZgXByGwF77WeWzHDigSuIvuB20Wcv6uA");

// Current Date
var currentDate = function(){
	var d = new Date();
	return d;
}

var addTarget = function(name){
			date = currentDate();
		  	var user = Parse.User.current();
			var Target = Parse.Object.extend("Target");
			var target = new Target();
			target.set("name", name);
			target.set("lastContact", date);
			target.set("user", user);
			
			target.save(null, {
				success: function(target){
					console.log('success!')
				}, //end success
				error: function(target, error){
					alert("Save error");
					console.log(error);
				} // end error
			}) // end target.save	
}; // end var AddTarget


$('#newUserSubmit').click(function(){
	document.activeElement.blur(); // hide keyboard
	// Grab variables
	var username = $('#newUserName').val();
	var password = $('#newUserPass').val();
	var email = $('#newUserEmail').val();
	
	// Make a user
	var user = new Parse.User();
	user.set("username", username);
	user.set("password", password);
	user.set("email", email);
	user.signUp(null, {
	success: function(user) {


	    // Hooray! Let them use the app now.
			// Populate Dummy Data	    	
						
			// Change UI
			$('#signUp').addClass('hidden');
			$('#newUserMessage').removeClass('hidden');
			
			addTarget("Names go here!");
			addTarget("Click = recent contact");
			addTarget("Grey = last contact >");
			addTarget("Right button = options >");

	    
	  },
	  error: function(user, error) {
	    // Show the error message somewhere and let the user try again.
	    alert("Error: " + error.code + " " + error.message);
	  }
	});	//end signUp
	
}); // end click

// Enter-helper for login box
$("#newUserEmail").keyup(function(event){ // allows enter
  if(event.keyCode == 13){
      $("#newUserSubmit").click();
  }
});


