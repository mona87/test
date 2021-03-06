<?php
/*
Template Name: ROI PDF
*/
?>
<!DOCTYPE html>
<html>
<head>
	<title>ROI PDF</title>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge"> 
		<meta name="viewport" content="width=device-width, initial-scale=1">  
		<link rel="stylesheet" type="text/css" href="http://work.style/wp-content/themes/workstyle/dist/styles/normalize.css" />
		<link rel="stylesheet" type="text/css" href="http://work.style/wp-content/themes/workstyle/dist/styles/pdf.css">
</head>
<body>
<div class="please-wait">
		<center>
			<image class="please-wait-image" src="http://work.style/wp-content/themes/workstyle/dist/images/workstyle_loading_white.gif" alt="loading" />
			<div class="please-wait-text">Preparing your custom report...</div>
			<div class="please-wait-sep">&nbsp;</div>
			<ul id="please-wait-quote-rotator">
  				<li>
					<div class="please-wait-quote-container">
						<div class="please-wait-quote">"I believe this model was the most powerful training in my life as a manager."</div>
						<div class="please-wait-quote-author">-Manager, Coca-Cola</div>
					</div>
  				</li>
  				<li>
					<div class="please-wait-quote-container">
						<div class="please-wait-quote">"I discovered that attending to people's psychological needs is key to maintaining a relationship with my customers."</div>
						<div class="please-wait-quote-author">-Account Manager, Avaya</div>
					</div>
  				</li>
  				<li>
					<div class="please-wait-quote-container">
						<div class="please-wait-quote">I believe this model was the most powerful training in my life as a manager."</div>
						<div class="please-wait-quote-author">-Manager, Coca-Cola</div>
					</div>
  				</li>
  				<li>
					<div class="please-wait-quote-container">
						<div class="please-wait-quote">I believe this model was the most powerful training in my life as a manager."</div>
						<div class="please-wait-quote-author">-Manager, Coca-Cola</div>
					</div>
  				</li>

    		</ul>

		</center>
	</div>
<div class="container" id="jspdf-container">
	<nav class="nav__pdf nav--width">
		<div class="nav--bgImage nav--bgImage--filter"><image src="/images/background2.png" width="1786" /></div>
		<div class="nav__wrapper">
			<image class="nav__one nav--logo" height="50" src="/images/pdfImages/workstyle-logo.svg"/>
		</div>
		<div class="nav__two nav--font-size "><span class="agents">XXXXXXXXX</span> agents</div>
		<div class="nav-pdf__blue-slash"></div>
		<div class="nav__three nav--font-size"><span class="training">XXXXXXXXX</span> training days</div>
		<div class="nav-pdf__blue-slash"></div>
		<div class="nav__four nav--font-size"><span class="churn">XXXXXXXXX</span> churn</div>
		<div class="nav-pdf__blue-slash"></div>
		<div class="nav__five nav--font-size nav--padding"><span class="cost">XXXXXXXXX</span> cost/hr</div>
	</nav>
	<section class="section-one-pdf">
		<div class="section-one__wrapper">
			<div class="section-one-pdf__values">
					<div id="section-one-inefficientCosts">
							<span class="section-two-pdf__values">
							<div class="section-two__arrow-up"></div>
							<div class="section-two__value-wrapper">
							<span class="section-two__dollar">$</span>
								<span class="section-two__value-one">0</span>
								<span class="section-two__letter1"></span>
							</div>
						</span>
						<span class="section-two-pdf__text">Agent Personality<br/> Inefficiency Costs</span>
					</div>
					<div id="section-one-gains">
						<span class="section-two-pdf__values">
							<div class="section-two__arrow-down"></div>
							<div class="section-two__value-wrapper">
							<span class="section-two__dollar">$</span>
								<span class="section-two__value-two">0</span>
								<span class="section-two__letter2"></span>
							</div>
						</span>
						<span class="section-two-pdf__text">Workstyle Training<br/> Efficiency Gains</span>
					</div>
					<div id="section-one-roi">
						<span class="section-two-pdf__values">
							<span class="section-two__value-three">0</span>
						</span>
						<span class="section-two-pdf__text">WITH WORKSTYLE</span>
					</div>
			</div>
		</div>
		<div>
			<image class="section-one__text section-one--img1" height="275" src="/images/pdfImages/section1-text.svg"/>
		</div>
	</section>
	<section class="section-one-part-two">
		<div class="section-one-part-two__wrapper-two">
		
		</div>
	</section>
	<section class="section-two-pdf section-two--bgImage section-two--filter">
		<div class="section-two-pdf__wrapper">
			<image class="section-two-pdf__text" height="365" src="/images/pdfImages/section2-text.svg"/>
		</div>
	</section>
	<section class="section-three">
		<div class="section-three__wrapper">
			
			<div><image class="section-three__text" height="300" src="/images/pdfImages/section3-text.svg"/></div>
			<div class="section-three__value"></div>
		</div>
	</section>
	<section class="section-four">
		<div class="section-four___wrapper">
			<image class="section-four__text" height="100" src="/images/pdfImages/section4-text.svg"/>
			<image class="section-four__computer" height="550" src="/images/pdfImages/computer.png"/>			
		</div>
	</section>
	<footer class="footer">
		<div class="footer__wrapper">
			<image class="footer__text" height="80" src="/images/pdfImages/footer.svg"/>
		</div>
	</footer>
	</div>
	<!-- <script type="text/javascript" src="bundle.js"></script> -->
	<script   src="https://code.jquery.com/jquery-2.2.2.min.js"   integrity="sha256-36cp2Co+/62rEAAYHLmRCPIych47CvdM+uTBJwSzWjI="   crossorigin="anonymous"></script>
		<script src="http://work.style/wp-content/themes/workstyle/dist/scripts/modernizr.custom.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/numeral.js/1.4.5/numeral.min.js"></script>
	<script type="text/javascript" src="http://work.style/wp-content/themes/workstyle/dist/scripts/jspdf.debug.js"></script>
    <script type="text/javascript" src="https://cdn.rawgit.com/niklasvh/html2canvas/0.5.0-alpha2/dist/html2canvas.min.js"></script>
    <script src="http://work.style/wp-content/themes/workstyle/dist/scripts/pdf-generator3.js"></script>
	</body>
</html>