<?php
/*
Template Name: ROI Calculator Page
*/
?>
<!DOCTYPE html>
<html>
<head>
	<title>ROI Calculator</title>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge"> 
		<meta name="viewport" content="width=device-width, initial-scale=1"> 
		<link rel="stylesheet" type="text/css" href="http://work.style/wp-content/themes/workstyle/dist/styles/normalize.css" />
		<link rel="stylesheet" type="text/css" href="http://work.style/wp-content/themes/workstyle/dist/styles/component.css" />
		
		<link rel="stylesheet" type="text/css" href="http://work.style/wp-content/themes/workstyle/dist/styles/pdf.css" />
		<link rel="stylesheet" type="text/css" href="http://work.style/wp-content/themes/workstyle/dist/styles/main.css"/>

		
</head>
<body >
	<div class="wrapper">
	<div class="modal-background">
		<div class="modal-box">
			<div class="close-x"><span>X</span></div>
			<div class="modal-text">Report sent!</div>
			<button class="close-modal">OKAY</button>
		</div>
	</div>
	<section id="page1">
		<div class="bgImg-filter"></div>
		<img class="bgImg" >
		<section id="main1">
		<h1>ROI Calculator</h1><div class="sub-title">for Agent Emotional Connection</div>
		<h4>Personality connections drive better emotional experiences for customers, and emotion drives loyalty. That makes it a $6 trillion enterprise opportunity.</h4>
		<h2>What’s YOUR slice of it? Answer these four quick questions and find out: </h2>	
		<form id="theForm" class="simform" autocomplete="off">
					<div class="simform-inner">
						<ol class="questions">
							<li>
								<span><label for="q1">What's your total agent count?</label></span>
								<input id="q1" name="q1" type="text" placeholder="Enter your agent count" />
							</li>
							<li>
								<span><label for="q2">How many days are new agents trained?</label></span>
								<input id="q2" name="q2" type="text" placeholder="Enter training days per agent" />
							</li>
							<li>
								<span><label for="q3">What percentage of agents leave yearly?</label></span>
								<input id="q3" name="q3" type="text" placeholder="Enter your churn rate"/>
							</li>
							<li>
								<span><label for="q4">What is your agent fully loaded cost per hr?</label></span>
								<input id="q4" name="q4" type="text" placeholder="Enter agent cost per hour"/>
							</li>
						</ol>
						<button class="submit" type="submit">Send answers</button>
						<div class="controls">
							<button class="next"></button>
							<button class="prev"></button>
							<div class="progress2"></div>
							<div class="progress"></div>
							<span class="number">
								<span class="number-current"></span>
								<span class="number-total"></span>
							</span>
							<span class="error-message"></span>
							<div class="input-hint">(Hint: The industry average is 43%)</div>
							<div class="input-hint">(Hint: The industry average is $17)</div>
						</div>
					</div>
					<span class="final-message"></span>
				</form>
				
				</section>
	</section>
	<nav id="navbar">
		<img class="nav-logo" src="http://work.style/wp-content/themes/workstyle/dist/images/WS_HeadLogo_MultiWhite.png"/>
		<img class="nav-logo-white" src="http://work.style/wp-content/themes/workstyle/dist/images/white-logo.png"/>
		<span id="agents"></span><div>agents</div>
		<img class="nav__blue-slash" height="20" src="http://work.style/wp-content/themes/workstyle/dist/images/blue-slash.svg" />
		<span id="training"></span><div>training days</div>
		<img class="nav__blue-slash" height="20" src="http://work.style/wp-content/themes/workstyle/dist/images/blue-slash.svg" />
		<span id="churn"></span><div>churn</div>
		<img class="nav__blue-slash" height="20" src="http://work.style/wp-content/themes/workstyle/dist/images/blue-slash.svg" />
		<span id="cost"></span><div>cost/hr</div>
		<div class="open arrow-down"></div>
	</nav>
	<section id="page2">
		<section id="main2">
			<h1>Lower Costs. Increase Efficiency. Improve CX.</h1>
			<h3>Forrester reports 35% of customer satisfaction stems from employee engagement rates. Training your agents to better connect with your customers with Workstyle is a smart investment.</h3>
			<div id="blue-bar"></div>
			<h4>YOUR RESULTS:</h4>
			<div class="values">
				<div id="inefficientCosts">
						<span class="section-two__values">
						<div class="section-two__arrow-up"></div>
						<div class="section-two_money_wrapper">
							<span class="section-two__dollar">$</span>
							<span class="section-two__value-one">0</span>
							<span class="section-two__letter1"></span>
						</div>
					</span>
					<span class="section-two__text">Your Current <br/> Agent Losses</span>
				</div>
				<div id="gains">
					<span class="section-two__values">
						<div class="section-two__arrow-down"></div>
						<div class="section-two_money_wrapper">
							<span class="section-two__dollar">$</span>
							<span class="section-two__value-two">0</span>
							<span class="section-two__letter2"></span>
						</div>
					</span>
					<span class="section-two__text">Workstyle Training <br/> Agent Savings</span>
				</div>
				<div id="roi">
					<span class="section-two__values">
						<span class="section-two__value-three">0</span>
					</span>
					<span class="section-two__text">WITH WORKSTYLE</span>
				</div>
			</div>
			<div id="arrow-1" class="arrow-yellow"></div>
		</section>

		<section id="main3" class="office-img">

			<h2>What Your Agents are Currently Costing You</h2>
			<h3><span>Between training and ramp-up time, new hires drain your bottom line long before they contribute to it. And even experienced agents don’t click with every customer they talk to, dealing a blow to your customer experience.</span></h3>
		</section>
		<section id="main4">
				<div class="section-four_wrapper">
					<div id="costPerHire">
						<span  class="mini-title">YOUR PER-HIRE<br/> TRAINING COST</span>
						<div  class="values-equation" id="value-one">$2,688</div>
						<span>The number above represents the investment you make per new  hire- and yet, you may still be missing the key to customer satisfaction.</span>
						</div>
					<div class="plus"></div>
					<div id="variance">
						<span class="mini-title">YOUR NEW HIRE<br/> PRODUCTIVITY VARIANCE</span>
						<div class="values-equation"  id="value-two">$10,000</div>
						<span>The number above represents the losses you incur due to new hire performance ramp up. New hires perform at the 60th percentile and are 15-20% less productive than top agents.</span></div>
					<div class="equal"></div>
					<div id="losess">
						<span class="mini-title">YOUR TOTAL LOSSES <br/>PER HIRE</span>
						<div class="values-equation"  id="value-three">$12,688</div>
						<span>The number above is the total losses you face per new hire. This is a massive opportunity for return on investment with Workstyle.</span>
					</div>
				</div>
		</section>
		<section id="main5" class="office-img2">
				<div class="arrow-yellow"></div>
				<h1>How Workstyle Training Saves You Money</h1>
				<h2>Workstyle shrinks the time between hire date and full output, and teaches ALL of your agents to naturally & easily connect with every customer, every time. 
				</h2>
				<div id="white-bar"></div>
				<div class="icons">
					<div class="icon-wrapper">
						<img id="pig" height="55" src="http://work.style/wp-content/themes/workstyle/dist/images/pig-icon.svg"/>
						<div class="icon-text">Lower training costs</div>
					</div>
					<div class="icon-wrapper">
						<img id="graph" height="52" src="http://work.style/wp-content/themes/workstyle/dist/images/graph-icon.svg"/>
						<div class="icon-text">Higher Productivity</div>
					</div>
					<div class="icon-wrapper">
						<img id="headphones" height="52" src="http://work.style/wp-content/themes/workstyle/dist/images/headphones-icon.svg"/>
						<div class="icon-text">Engaged Agents</div>
					</div>
					<div class="icon-wrapper">
						<img id="badge" height="52" src="http://work.style/wp-content/themes/workstyle/dist/images/badge-icon.svg" />
						<div class="icon-text">Satisfied Customers</div>
					</div>
				</div>

		</section>
			
			<section id="main6">

				<h1>Get a Personalized Copy</h1>
				<span id="sub-title2">of the Workstyle ROI Report</span>
				<h2>Get a customized ROI report to share with your team instantly delivered to your inbox.</h2>
				<div id="blue-bar"></div>
				<div id="recommendation">
				<div >“We found that emotion, how an experience makes the customer feel, has a bigger influence on their loyalty to a brand than anything else.”
				</div>
					<div>
						- Megan Burns, Principal Analyst Serving CX Professionals
					</div>
				</div>
					<div id="report-section">
					<form class="email-form">
						<input class="first-name"/>
						<div class="form-error" id="first-name-err"> Please enter a name</div>
						<label>FIRST NAME</label>
						<input class="last-name"/>
						<div class="form-error" id="last-name-err"> Please enter a name</div>
						<label>LAST NAME</label>
						<input class="company-name"/>
						<div class="form-error" id="email-err"> Please enter a valid email address</div>
						<label>COMPANY EMAIL</label>
					</form>
				</div>
					<img class="flyer" src="http://work.style/wp-content/themes/workstyle/dist/images/WS_Printout.png"/>
				<button id="report-button">SEND MY FREE REPORT</button>
			</section>
			<footer id="footer">
						<div><a href="http://work.style/web-use-policy/">Website Use Policy</a></div>
						<div><a href="http://work.style/privacy-policy/">Privacy Policy</a></div>
						<div><a href="http://work.style/about/">About</a></div>
						<div><a href="http://www.mattersight.com/about-us/patents/">Patents</a></div>
			</footer>


	</section>
	</div>

			<script src="https://code.jquery.com/jquery-2.2.2.min.js"   integrity="sha256-36cp2Co+/62rEAAYHLmRCPIych47CvdM+uTBJwSzWjI="   crossorigin="anonymous"></script>
			<script src="http://work.style/wp-content/themes/workstyle/dist/scripts/modernizr.custom.js"></script>
			<script src="https://cdnjs.cloudflare.com/ajax/libs/numeral.js/1.4.5/numeral.min.js"></script>
			<script src="http://work.style/wp-content/themes/workstyle/dist/scripts/classie.js"></script>
			<script src="http://work.style/wp-content/themes/workstyle/dist/scripts/stepsForm.js"></script> 
			<script src="http://work.style/wp-content/themes/workstyle/dist/scripts/calc.js"></script>
			<!-- <script src="http://work.style/wp-content/themes/workstyle/dist/scripts/validator.min.js"></script> -->
			<script src="http://work.style/wp-content/themes/workstyle/dist/scripts/validator.min.js"></script>
			<!-- <script src="bundle.js"></script> -->
			<script src="http://work.style/wp-content/themes/workstyle/dist/scripts/formInit.js"></script>
			 <!-- <script src="scripts/pdf-generator.js"></script> -->

</body>
</html>