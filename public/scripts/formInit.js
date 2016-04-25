
 	// for ie 10 and 11
		var isIE11 = !!window.MSStream;

		//after submitting form
		var theForm = document.getElementById('theForm');

		 if(isIE11){
		 	$('.next, .prev').css({'bottom':'55px'});
			$('.next, .prev').addClass('move-arrow-ie2');
		}

		new stepsForm(theForm, {
		    onSubmit: function(form) {

		        $('body').css({ "overflow": "visible" });
		        $('.bgImg').css({ "min-height": "100%" });
		         
		        $('#page2').show( function(){
		        	 $('#page1').css({ "position": "relative", "transform": "translateY(-725px)" });
					$('#page2').css({ "transform": "translateY(-700px)", "margin-bottom":"-700px" });

				});
		       	$('.arrow-down').css({"margin-bottom":"5px", "transform": "rotate(180deg)"});
				$('.nav-logo').hide();	
				$('#navbar > div, #navbar img:not(:first-child), #navbar span').show();   
		        // $('#navbar ').css("display", "flex");
		        $('.bgImg').css({"position": "absolute"});

					if(isIE11){
					 //   /* Something */
					 // }
			        	//for ie11
			         // if (Object.hasOwnProperty.call(window, "ActiveXObject") && !window.ActiveXObject) {
	    				$('.wrapper').addClass('ie');
	    				$('#page2').css({'position':'relative','margin-bottom':'-700px'});
	    				$('#main5 .arrow-yellow').addClass('ie-arrow-pos');
	    				$('.values > div').addClass('.ie-values-padding');
	    				$('#main4 div:not(:first-child)').css({'min-width':'inherit','width':'inherit'});
	    				$('.values > div').css({'padding-top':'10px'});
	    				$('#main3 h2').css({'padding-top':'50px'});		
	    				$('#costPerHire, #variance, #losess').css({'max-width':'250px'});	
						$('.plus, .equal').css({'min-width':'250px','width':'250px','min-width': '75px', 'width':'auto'});	
					}

				// //only ie10 -fix column sizing
				// if ("onpropertychange" in document && !!window.matchMedia) {
					
						
				// }

		

		   }
		});


		//toggle page slide
		$('.open').click(function() {


		    //hides form
		    if ($('#page1').hasClass('toggled')) {
		        $('.bgImg').css({ "min-height": "100%" });
		        $('#page1').css({ "transform": "translateY(-725px)" }).removeClass('toggled');
		        $('#page2').css({ "transform": "translateY(-700px)","margin-bottom":"-700px" });
		        $('.arrow-down').css({"margin-bottom":"5px", "transform": "rotate(180deg)"});
		        	 if(isIE11){
			  	    // $('.wrapper').addClass('ie');
    				$('#page2').css({'position':'relative','margin-bottom':'-700px'});

			  	}

		    } else {
		        $('.bgImg').css({ "min-height": "0" });
		        $('#page1').css({ "transform": "translateY(0px)" }).addClass('toggled');
		        $('#page2').css({ "transform": "translateY(0px) " });
		        $('.arrow-down').css({"margin-bottom":"0px", "transform": "rotate(0deg)"});

		        	 if(isIE11){
   					// $('.wrapper').addClass('ie');
    				$('#page2').css({'position':'relative','margin-bottom':'0px'})
			  	}
		    }


		});




