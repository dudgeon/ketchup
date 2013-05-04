<!-- includes <head>, starts <body>, starts <div #container> -->
<?php include_once('includes/head.php'); ?>  

<header><a href="index.php"><h1>Ketchup</h1></a></header>


<div id="content"> <!-- !CONTENT: Visible when logged in -->


<h2>About</h2>
<p>Ketchup is a simple, little web app to help you keep track of when you last spoke with people you care about, and to encourage you to reach out (catch up!) more often.</p>
<p>I made this app because there are so many people I often forget to reach out to.</p>
<p>Sign up for a free account <a href="signup.php">here</a>. Let me know if you have any <a href="mailto:dudgeon@gmail.com">questions</a>.</p>

<h2>FAQ</h2>
<h3>What does Ketchup do?</h3>
<p>Ketchup was designed to do two simple things:</p>
<ol>
	<li>Make a list of people you care about</li>
	<li>Keep track of when you last spoke with them</li>
</ol>
<p>That's it!</p>

<h3>That's it?</h3>
<p>Yep! Ketchup <em>won't</em> track what you talked about, how you last reached out (phone/email), etc.</p>
<p>It is designed to be super-simple, super-slim, and intuitive to use.</p>

<h3>Why did you make Ketchup?</h3>
<p>I needed an app like this for myself. When I finished making it I thought other people might find it helpful.</p>

<h3>So this isn't a business?</h3>
<p>Nope! Just a hobby. If you find it helpful, that's great! But I don't plan to ever charge money for the service or add a bunch of features that will reduce its simplicity.</p>

<h3>What happened to Hit List?</h3>
<p>Ketchup is the same app as Hit List, just renamed. When I first built Hit List it was just for me so I didn't give the name much thought. When other people started using it, I realized the name was too similar to <a href="http://hiplist.com">Hiplist</a>, a very cool service my friend Jack is building (you should check it out!).</p> 

<h3>I love Ketchup!</h3>
<p>I'm really happy to hear that! Why don't you spread the word?</p>
<p class="center"><a data-pin-config="beside" href="//pinterest.com/pin/create/button/?url=http%3A%2F%2Fimokay.org%2Fhitlist&media=http%3A%2F%2Fimokay.org%2Fhitlist%2Fhitlist-screenshot.png&description=Hit%20List%20is%20a%20simple%2C%20free%20web%20app%20to%20help%20you%20keep%20track%20of%20when%20you%20last%20spoke%20with%20people%20you%20care%20about%3B%20and%20to%20encourage%20you%20to%20reach%20out%20more%20often." data-pin-do="buttonPin" ><img src="//assets.pinterest.com/images/pidgets/pin_it_button.png"/></a></p>

<h3>What services does Ketchup use?</h3>
<p>Ketchup was made possible by the following services, all of which I'd enthusiastically recommend:</p>
<ul>
	<li><a href="http://codecademy.com">Codecademy</a>: Where I started from zero and learned enough html/css/js to build this app</li>
	<li><a href="http://parse.com">Parse</a>: An awesome, noob-friendly backend as a service (BAAS) provider; saved me from learning anything server-related by abstracting away a ton of functionality; also powers <a href="http://waylist.it">Waylist</a> and <a href="http://coffeesnob.me">CoffeeSnob</a></li>
	<li><a href="http://dreamhost.com">DreamHost</a>: Hosting, great service</li>
	<li><a href="http://iwantmyname.com">IWantMyName</a>: Great domain registrar for weird TLDs; also helped with transfer of <a href="http://geoff.is">geoff.is</a></li>
</ul>
</div> <!-- end #content -->




<div id="logout"  class="hidden"> <!-- !LOGOUT -->
	<button id="logoutButton">Log out</button>
</div> <!-- end #logout -->

</div> <!-- end #container -->
<script src="script.js"></script>
<!-- includes #logout, ends <div #container>, includes script.js, includes Google Analytics, ends <body>-->
<?php include_once('includes/end.php'); ?>  
