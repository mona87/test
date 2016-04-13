// var scrollHandler = $(window).scroll(function(e) {   
//     if($(document).scrollTop() >=100) {
//        $(document).scrollTop(100);
//     }
// });
		//after submitting form
		var theForm = document.getElementById('theForm');

		new stepsForm(theForm, {
		    onSubmit: function(form) {

		    	// $(window).off("scroll", scrollHandler);

		        $('body').css({ "overflow": "visible" });
		        $('.bgImg').css({ "min-height": "100%" });
		        $('#page2').show( function(){
		        	 $('#page1').css({ "position": "relative", "transform": "translateY(-700px)" });
					$('#page2').css({ "transform": "translateY(-700px)", "margin-bottom":"-700px" });

				 })	        
		        $('#navbar').css("display", "flex");
		        // $('#main1').css({"margin-top": "120px"});

		        // hide form
		        // classie.addClass(theForm.querySelector('.simform-inner'), 'hide');

		        /*
		        form.submit()
		        or
		        AJAX request (maybe show loading indicator while we don't have an answer..)
		        */

		        // let's just simulate something...
		        // var messageEl = theForm.querySelector('.final-message');
		        // messageEl.innerHTML = 'Thank you! We\'ll be in touch.';
		        // classie.addClass(messageEl, 'show');
		    }
		});


		//toggle page slide
		$('.open').click(function() {
		    //hides form
		    if ($('#page1').hasClass('toggled')) {
		        $('.bgImg').css({ "min-height": "100%" });
		        $('#page1').css({ "transform": "translateY(-700px)" }).removeClass('toggled');
		        $('#page2').css({ "transform": "translateY(-700px)","margin-bottom":"-700px" });

		    } else {
		        $('.bgImg').css({ "min-height": "0" });
		        $('#page1').css({ "transform": "translateY(0px)" }).addClass('toggled');
		        $('#page2').css({ "transform": "translateY(0px) " });

		    }
		})

