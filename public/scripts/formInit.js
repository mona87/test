	
//after submitting form
var theForm = document.getElementById( 'theForm' );

new stepsForm( theForm, {
	onSubmit : function( form ) {
		$('body').css({"overflow":"visible"});
		$('.bgImg').css({"min-height":"100%"});
		$('#page2').css({"transform":"translateY(-700px)"});
		$('#page1').css({"position": "relative","transform": "translateY(-700px)"});
		// $('#main1').fadeOut(500);
		$('#navbar').css("display","flex");
		// hide form
		classie.addClass( theForm.querySelector( '.simform-inner' ), 'hide' );

		/*
		form.submit()
		or
		AJAX request (maybe show loading indicator while we don't have an answer..)
		*/

		// let's just simulate something...
		var messageEl = theForm.querySelector( '.final-message' );
		messageEl.innerHTML = 'Thank you! We\'ll be in touch.';
		classie.addClass( messageEl, 'show' );
	}
} );
	

//toggle page slide
$('.open').click(function(){
	//hides form
	if($('#page1').hasClass('toggled')){
		$('.bgImg').css({"min-height":"100%"});
		$('#page1').css({"transform": "translateY(-700px)"}).removeClass('toggled');
		$('#page2').css({"transform":"translateY(-700px)"});
		// $('#main1').fadeOut(200);
	}else{
		$('.bgImg').css({"min-height":"0"});
		$('#page1').css({"transform": "translateY(0px)"}).addClass('toggled');
		$('#page2').css({"transform":"translateY(0px)"});
		// $('#main1').fadeIn(500);

	}
})