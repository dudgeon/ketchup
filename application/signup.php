


<!-- includes <head>, starts <body>, starts <div #container> -->
<?php include_once('includes/head.php'); ?>  

<header><a href="index.php"><h1>Ketchup</h1></a></header>


<div id="content">

<div id="signUp">
	<h2>Sign Up</h2>
	<p>To sign up, please fill out the details below:</p>
	
	<h3>User Name</h3>
	<input type="text" autocapitalize="off" autocorrect="off" id="newUserName" placeholder="case-sensitive" class="signup"/>
	<h3>Password</h3>
	<input type="password" autocapitalize="off" autocorrect="off" id="newUserPass" placeholder="" class="signup"/>
	<h3>Email Address</h3>
	<input type="email" autocapitalize="off" autocorrect="off" id="newUserEmail" placeholder="" class="signup"/>
	<p class="aside">*I have no intention of emailing you.</p>
	<button id="newUserSubmit">Submit</button>

<p>Let me know if you have any <a href="mailto:dudgeon@gmail.com">questions</a>.</p>
</div> <!-- end #signUp -->

<div id="newUserMessage" class="hidden">
	<h2>Welcome</h2>
	<p>You are logged in and ready to <a href="index.php">go</a>!</p>
	
</div> <!-- end #newUserMessage -->

</div> <!-- end #content -->

<!-- includes #logout, ends <div #container>, includes script.js, includes Google Analytics, ends <body>-->

<script src="signup.js?2"></script>
<?php include_once('includes/end.php'); ?>  
