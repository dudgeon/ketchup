Parse.initialize("vy8mFo5X9Nuc74yHH6ECTrvrYiLubLXlHrThliAe", "hPBzmhAbZgXByGwF77WeWzHDigSuIvuB20Wcv6uA");

//hide safari top-chrome
window.scrollTo(0, 1);

var userName;
var userPass;
var user = Parse.User.current();
var results;

// Populate Hitlist: FOR LOOP
var fillHitList = function(results){
	// Clear existing results
	$('#hitlist').empty();
	
	// !POPULATE for loop
	for(i=0; i<results.length; i++){
		var ageMessage;
		var age;
		var urgency;
		
		// Age message conditions
		if(results[i].attributes.lastContact == null){
			ageMessage = "(not yet)";
			urgency = "highUrgency";
		} else {
			date = new Date();
			age = ((date - results[i].attributes.lastContact)/(1000*60*60*24)).toFixed(0);	
			
			if(age>=60){
				urgency = "medUrgency"
			} else {
				urgency = "lowUrgency"
			};		
			
			ageMessage = "(" + age + " days ago)"
		}; // end age message conditions
				
		// Main target div
		$('#hitlist').append('<div class="target-wrapper ' + urgency + '"><div class="target" obj="' + results[i].id + '" name="' + results[i].attributes.name + '"><span class="name">' + results[i].attributes.name + '</span>&nbsp<span class="age">'+ ageMessage + '</span></div><div class="delete expand" obj="' + results[i].id + '" name="' + results[i].attributes.name + '">X</div></div>');
	}; // end for()	
};


// Populate List: Local
/*
var populateTargetsLocal = function(){
	results = JSON.parse(localStorage['localHitList']);
	console.log(results);

	// Clear existing results
	$('#hitlist').empty();
	
	// !POPULATE for loop
	for(i=0; i<results.length; i++){
		var ageMessage;
		var age;
		var urgency;
		
		// Age message conditions
		if((results[i].lastContact == undefined)||(results[i].lastContact == null)){
			ageMessage = "(not yet)";
			urgency = "highUrgency";
		} else {
			date = new Date();
			age = ((date - results[i].lastContact.iso)/(1000*60*60*24)).toFixed(0);	
			
			if(age>=60){
				urgency = "medUrgency"
			} else {
				urgency = "lowUrgency"
			};		
			
			ageMessage = "(" + age + " days ago)"
		}; // end age message conditions
				
		// Main target div
		$('#hitlist').append('<div class="target-wrapper ' + urgency + '"><div class="target" obj="' + results[i].id + '" name="' + results[i].name + '"><span class="name">' + results[i].name + '</span>&nbsp<span class="age">'+ ageMessage + '</span></div><div class="delete" obj="' + results[i].id + '" name="' + results[i].name + '">X</div></div>');
	}; // end for()	

};
*/


// Populate List: Online
var populateTargets = function(){
	var Target = Parse.Object.extend("Target");
	var query = new Parse.Query(Target);
	query.equalTo("user", user);
	query.ascending('lastContact')
	query.find({
		success: function(results) {
			console.log(results);
			localStorage['localHitList']=JSON.stringify(results);
			fillHitList(results);
			
		}, // end query.find/success
		error: function(error) {
			alert("Error: " + error.code + " " + error.message);
		} // end query.find/error
	}); // end query.find
} // end populateTargets

// Current Date
var currentDate = function(){
	var d = new Date();
	return d;
}

// Add Name
var addTarget = function(){
	document.activeElement.blur(); // hide keyboard
	
	var addTargetName = $('#addTargetName').val()
	var Target = Parse.Object.extend("Target");
	var target = new Target();
	target.set("name", addTargetName);
	target.set("user", user);
	
	target.save(null, {
		success: function(target){
			populateTargets();
		}, //end success
		error: function(target, error){
			alert("Save error");
			console.log(error);
		} // end error
	}) // end target.save
	
	$('#addTargetName').val(""); // clear input field
} // end addTarget

// Add contact instance
var contactInstance = function(){
	var targetObjectID
	$('#hitlist').delegate('.target', 'click', function() {
		
		var confirmName = $(this).attr('name');
		var confirmInstance = confirm("Log contact for " + confirmName + "?");
		if (confirmInstance == true){
			
			targetObjectID = $(this).attr('obj');
		
			// RETRIEVE the object
			var Target = Parse.Object.extend("Target");
			var query = new Parse.Query(Target);
			query.get(targetObjectID, {
				success: function(target) {
	
					date = currentDate();
					target.set('lastContact', date);
					target.add('lastContactArray', date);

					// now SAVE the object
					target.save(null, {
						success: function(target){
							populateTargets();
						} // end save success
					}) // end save
	
				}, // end get success
				error: function(target) {
				} // end get error
			}); // end get
		}; // end confirmInstance

	}); // end click
}; // end contactInstance function


// Delete Target
var deleteTarget = function(){
	var targetObjectID
	$('#hitlist').delegate('.delete', 'click', function() {
		console.log('somethin');
		var confirmName = $(this).attr('name');
		var confirmInstance = confirm("Remove " + confirmName + " forever?");
		if (confirmInstance == true){
			
			targetObjectID = $(this).attr('obj');
		
			// RETRIEVE the object
			var Target = Parse.Object.extend("Target");
			var query = new Parse.Query(Target);
			query.get(targetObjectID, {
				success: function(target) {
	
					// now DELETE the object
					target.destroy({
						success: function(target) {
							// The object was deleted from the Parse Cloud.
							populateTargets();	
						}, error: function(target, error) {
							// The delete failed.
							// error is a Parse.Error with an error code and description.
						} //end error
					}); //end destroy
	
				}, // end success
				error: function(target) {
				// The object was not retrieved successfully.
				// error is a Parse.Error with an error code and description.
				}
			}); // end query
			
		}; // end confirmInstance
			
	}); // end click
}; // end deleteContact function


// Logged-in behavior
var mainFunction = function(){
	window.scrollTo(0, 1);

	$('#login').addClass('hidden');
    $('#content').removeClass('hidden');
    $('#logout').removeClass('hidden');	
    
/*     populateTargetsLocal(); */
    populateTargets();
    contactInstance();
    deleteTarget();
    
    $('#addTargetButton').click(function(){
	    addTarget();
    }) // end add target
    
    // iPhone detection
	if(((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i))) && !window.navigator.standalone) {		
		$('#homescreen-alert').removeClass('hidden');
	}
};

// !Main Login Handler
var currentUser = Parse.User.current();
if (currentUser) {
    // main login handler: user is already logged in, do this stuff
	console.log("already logged in");
	window.scrollTo(0, 1);
	mainFunction();
	
	// save user login instance
	date = currentDate();
	currentUser.set('lastLogin', date);
	currentUser.add('lastLoginArray', date);

	// now SAVE the object
	currentUser.save(null, {
		success: function(target){
			console.log("Saved login instance");
		} // end save success
	}) // end save    
	
} else {
    // main login handler: do this stuff if no user logged in:
    $('#login').removeClass('hidden');
    $('#loginButton').click(function(){
		userName = $('#user').val();
		userPass = $('#pass').val();
		
		Parse.User.logIn(userName, userPass, {
			success: function(user) {
				// Do stuff after successful login.
				location.reload();
			},
			error: function(user, error) {
				// The login failed. Check error to see why.
				console.log(error);
			}
		}); // end login function
	}); // end loginButton click
} // end main login handler


// Header reload
$('h1').click(function(){
	location.reload();
});

// Enter-helper for login box
$("#pass").keyup(function(event){ // allows enter
  if(event.keyCode == 13){
      $("#loginButton").click();
  }
});

// Enter-helper for addTarget box
$("#addTargetName").keyup(function(event){ // allows enter
  if(event.keyCode == 13){
      $("#addTargetButton").click();
  }
});

// !Logout Handler
$('#logoutButton').click(function(){
	Parse.User.logOut();
	var currentUser = Parse.User.current(); 
	$('#logout').addClass('hidden');
	$('#content').addClass('hidden');
	$('#login').removeClass('hidden');
	location.reload();
});