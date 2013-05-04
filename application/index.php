

<!-- includes <head>, starts <body>, starts <div #container> -->
<?php include_once('includes/head.php'); ?>  

<header><h1>Ketchup</h1></header>

<div id="login" class="hidden"> <!-- !LOGIN -->
	<p>Ketchup is a simple, free web app to help you keep track of when you last spoke with people you care about; and to encourage you to reach out (catch up!) more often. <a href="about.php">Learn more</a>, or:</p>
	
	<a href="signup.php"><div id="signup-button">Sign up</div></a>

	<div id="return-login">
		<h3>Returning users:</h3>		
		<input type="text" id="user" autocapitalize="off" autocorrect="off" placeholder="user name, case-sensitive"/>
		<input type="password" autocapitalize="off" autocorrect="off" id="pass" placeholder="password"/>
		<button id="loginButton">Log in</button>
	</div>
	
</div> <!-- end #login -->

<div id="content" class="hidden"> <!-- !CONTENT: Visible when logged in -->

	<div id="hitlist">
		<p>Loading contacts...</p>
	</div>
	
	<div id="add-target">
	<h2>Add</h2>
		<input type="text" id="addTargetName" placeholder="name"/>	
		<button id="addTargetButton">Add</button>
	</div>	
	

</div> <!-- end #content -->

<div id="logout"  class="hidden"> <!-- !LOGOUT -->
	<h3 class="center"><a href="about.php">About</a> / <a href="mailto:dudgeon@gmail.com">Contact</a></h3>

	<button id="logoutButton">Log out</button>
</div> <!-- end #logout -->

</div> <!-- end #container -->

<div id="homescreen-alert" class="hidden">
	<p> Add Ketchup to your home screen by clicking the button below:</p>
	<div class="arrow-down"></div>
</div>

<script src="script.js?2"></script>

<!-- includes #logout, ends <div #container>, includes script.js, includes Google Analytics, ends <body>-->
<?php include_once('includes/end.php'); ?>  

