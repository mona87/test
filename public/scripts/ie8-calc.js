$(document).ready(function() {
    var isIE8 = false;


    var dailyAgentCost = costPerHour * 8;
    var annualAgentCost = 235 * 8 * costPerHour;
    var agentCost = agentNum * annualAgentCost;

    var agentNum = 0;
    var trainingDaysNum = 0;
    var churnNum = 0;
    var costPerHour = 0;

    var trainingDays = 0;
    var proficiencyCost = 0;
    var newAgentCost = 0;
    var totalChurnCost = 0;
    var churnSavings = 0;

    //workstyle cost
    var setUpAgents = 0;
    var setUpChurnAgents = 0;
    var runningCost = 0;
    var totalCost = 0;
    var averageCost = 0;

    var ROI = 0;

    if ($('html').is('.lte-ie8')) {

        $('.open-ie8').click(function() {
        	$('#navbar').show();
            slide();

        });

        $('input').val('');


        $('.input-1').addClass('current-input');
        // $('.current-input').show();
        $('.current-input > input').focus();

        $('input').on('keydown', function(e) {
        	$('.current-input > .label-ie').hide();
        	if ($('.current-input > input').attr('name') === 'q4') {
           	 	if ($('#q4').val().charAt(0) !== '$') {
               		 $('#q4').val('$' + $('.current-input > input').val());
            	}
        	}

        	    if (e.which == 13) {
        	    	
        	    	 getValues();
            		nextQuestion(e);
            		 // showBlueArrow();
       		 }
        });

        $('.next-arrow').on('click', function(e) { 
        	
        		 getValues();    
        		 nextQuestion(e);
        		  // showBlueArrow();
        		
        		  
        });

        $('.prev-arrow').on('click', function(e) { 
        	
        		 getValues();     
        		 prevQuestion(e);
        		 // showBlueArrow();
        		     
        });

        function slide() {
        	$('#page2').show();

            if ($('#page1').height() === 800) {

                $('#page1').animate({ height: 75 }, 200);
            } else {
                $('#page1').animate({ height: 800 }, 200);
            }

        }

        function nextQuestion(e) {
        	if(notEmpty()){
        		
        		 increaseProgressBar();
        		

                $('.current-input').blur();

                if ($('.input-4').hasClass('current-input') &&  $('#q4').val().length >= 2) {
                	$('#navbar').show();
                    slide();
                    $('.error-message-ie8').hide();

                } else if($('.input-4').hasClass('current-input') &&  $('#q4').val().length  <2){
                		$('.error-message-ie8').show();
                }else {
                	$('.error-message-ie8').hide();
                    $('.questions').find('.current-input')

                    .removeClass('current-input')
                        .next()
                        .addClass('current-input');
    						$('.current-input > input').focus();
    					    
                        	showHint();
                }
              }
            
            
        }
        	

	            //autopopulate %
	    $('#q3').on('keyup', function(e) {

	  
	        var current = $('#q3').val();

	        if (e.keyCode >= 48 && e.keyCode <= 57) {
	            var newString = current.replace(/%/g, '');
	            $('#q3').val(newString + '%');
	         
	            //position cursor right before % 
	            if (document.selection) {
	           
	            var rng = document.selection.createRange();
	            rng.moveEnd("character", -1);

	             rng.select();

	        	}
	            // $('#q3').val($('#q3').val());
	            // document.querySelector('#q3').setSelectionRange($('#q3').val().length - 1, $('#q3').val().length - 1);

	        }
	    });



        function prevQuestion(e) {
        		decreaseProgressBar();

                $('.current-input').blur();

                if ($('.input-1').hasClass('current-input')) {
       
                   

                } else {

                    $('.questions').find('.current-input')

                    .removeClass('current-input')
                        .prev()
                        .addClass('current-input');
                        $('.current-input > input').focus();
                        if($('.current-input > input').attr('id') !== 'q3'){
           				  $('.current-input > input').val($('.current-input > input').val());
                        }
                        showHint();
                }
            
        }

        function increaseProgressBar(){

        	var newWidth = $('.progress').width() + 155;
        	if(newWidth <= 620){
        		$('.progress').css({'width':newWidth+'px'});
        	}
        
        }

        function decreaseProgressBar(){
        	var newWidth = $('.progress').width() - 155;
        	if(newWidth > 0){
        		$('.progress').css({'width':newWidth+'px'});
        	}
        }

        function notEmpty(){
        	if($('.current-input input').val().length > 0){
        		
        		$('.error-message-ie8').hide();
        		return true
        	}else{
        		$('.error-message-ie8').show();
        		$('.current-input > .label-ie').show();
        
        		
        	}
        }

        function showHint(){
        	if($('.current-input > input').attr('id') === 'q3'){
        		$('.hint-ie8-1').show();
        		$('.hint-ie8-2').hide();
        	}else if($('.current-input > input').attr('id') === 'q4'){
        		$('.hint-ie8-1').hide();
        		$('.hint-ie8-2').show();
        	}else{
        		$('.hint-ie8-2').hide();
        		$('.hint-ie8-1').hide();
        	}
        }

    }

    function showBlueArrow(){
    	if($('.current-input > input').val().length > 0){
    		$('.blue-arrow').show();
    		$('.next-arrow').hide();
    	}else{
    		$('.blue-arrow').hide();
    		$('.next-arrow').show();
    	}
    }

    function getValues() {
        //get agent number
        if (agentNum !== $('#q1').val()) {
            //add value to navbar
            $('#agents').html($('#q1').val());

            if ($('#q1').val() !== '') {

                agentNum = numeral().unformat($('#q1').val());
            }

        }
        if (trainingDaysNum !== $('#q2').val()) {
            //add val to navbar
            $('#training').html($('#q2').val());
            //get training days number
            if ($('#q2').val() !== '') {
                trainingDaysNum = numeral().unformat($('#q2').val());
            }
        }
        if (churnNum !== null) {
            //add val to navbar
            $('#churn').html($('#q3').val());
            //get churn days
            if ($('#q3').val() !== '') {

                churnNum = numeral().unformat($('#q3').val());

           
            }
        }
        if (costPerHour !== null) {
            //add val to navbar

            $('#cost').html($('#q4').val());
            //get cost per hour
            if ($('#q4').val() !== '') {

                costPerHour = numeral().unformat($('#q4').val());
            }
        }

        // console.log( 'agentNum: ' +agentNum + ' trainingDaysNum: ' + trainingDaysNum + ' churnNum: ' + churnNum + ' costPerHour: ' + costPerHour);
        calculateROI(agentNum, trainingDaysNum, churnNum, costPerHour);
        // console.log( 'agentNum: ' +agentNum + ' trainingDaysNum: ' + trainingDaysNum + ' churnNum: ' + churnNum + ' costPerHour: ' + costPerHour);

    }


    function calculateROI(agentNum, trainingDaysNum, churnNum, costPerHour) {

        dailyAgentCost = costPerHour * 8;
        annualAgentCost = 235 * 8 * costPerHour;
        agentCost = agentNum * annualAgentCost;

        //churn cost
        trainingDays = trainingDaysNum * dailyAgentCost;
        proficiencyCost = .25 * annualAgentCost;
        var noChurn = .15 * annualAgentCost;
        newAgentCost = trainingDays + proficiencyCost;
        totalChurnCost = newAgentCost * (agentNum * churnNum);
        var agentSubperformance = noChurn * (1 - churnNum) * agentNum;
        churnSavings = totalChurnCost * .1;
        var agentProductivityImprove = .05 * agentSubperformance;
        var existUnderperform = churnSavings + agentProductivityImprove;

        //workstyle cost
        setUpAgents = 125 * agentNum;
        setUpChurnAgents = (agentNum * churnNum) * 125;
        runningCost = 12 * 10 * agentNum;
        totalCost = setUpAgents + runningCost + setUpChurnAgents;
        averageCost = totalCost / 500;

        // ROI = (existUnderperform - totalCost) / totalCost;
        ROI = existUnderperform/totalCost;


        var workstyleCosts = churnSavings - totalCost;
        // console.log(ROI);

        // console.log('noChurn ', noChurn);
        // console.log('agentSubperformance ', agentSubperformance);
        // console.log('agentProductivityImprove ', agentProductivityImprove);
        // console.log('existUnderperform ', existUnderperform);
        // console.log('costs', totalChurnCost);
        // console.log('gains ', churnSavings);
        // console.log('roi ' + ROI);
        // console.log('proficiencyCost ' + proficiencyCost);
        // console.log('trainingDays ' + trainingDays);
        // console.log('newAgentCost ' + newAgentCost);


        //section2 values
        var string = numeral(totalChurnCost).format('(0.0 a)');
        //get last char and uppercase
        var letter = string.charAt(string.length - 1).toUpperCase();

        var string2 = numeral(churnSavings).format('(0.0 a)');
        var letter2 = string2.charAt(string2.length - 1).toUpperCase();

        function newString(string) {
            return string.substring(0, string.length - 1);
        }

        function upperCase(string) {
       
            return string.charAt(string.length - 1).toUpperCase();

        }
        //update values in DOM
        $('.section-two__value-one').html(newString(string));
        $('.section-two__letter1').html(upperCase(letter));
        $('.section-two__value-two').html(newString(string2));
        $('.section-two__letter2').html(upperCase(letter2));
        $('.section-two__value-three').html(numeral(ROI).format('0.0') + 'x ROI');

        $('#value-one').html(numeral(trainingDays).format('$0,0'));
        $('#value-two').html(numeral(proficiencyCost).format('$0,0'));
        $('#value-three').html(numeral(newAgentCost).format('$0,0'));

        //rest values to zero
        agentNum = 0;
        trainingDaysNum = 0;
        churnNum = 0;
        costPerHour = 0;

    }

        //hide modal
    $('.close-modal, .close-x span').click(function() {
        $('.modal-background').hide();
    });

    $('#report-button').click(function(e) {
        e.preventDefault();



        console.log('fname ', $('.first-name').val());
        console.log('lname ', $('.last-name').val());
        console.log('company-name ', $('.company-name').val());

        var firstName = $('.first-name').val();
        var lastName = $('.last-name').val();
        var email = $('.company-name').val();
        var totalInefficiencyCost = $('.section-two__value-one').val();
        var totalEfficiencyGain = $('.section-two__value-two').val();

        if(validator.isNull(firstName)){
      		$('#first-name-err').show();
      	}else{
      		$('#first-name-err').hide();
      	}
      	if(validator.isNull(lastName)){
      			$('#last-name-err').show();
      	}else{
      		$('#last-name-err').hide();
      	}
      	if(validator.isNull(email)){
     			$('#email-err').show();
      	}else{
      		$('#email-err').hide();
      	}

      	if( firstName.length > 0  && lastName.length > 0 && email.length > 0){
      		console.log('email')
   		// 
                          $('.modal-background').css({"display":"block"});
   				jQuery.support.cors = true;
		        $.ajax({
		            url: 'https://my.work.style/api/mail-roi-report/',
		            type: 'POST',
		            crossDomain: true,
		            dataType: "json",
		            contentType: 'application/json',
		            data: JSON.stringify({
		                "data": {
		                    "first_name": firstName,
		                    "last_name": lastName,
		                    "email": email,
		                    "num_agents": agentNum,
		                    "training_days": trainingDaysNum,
		                    "percent_churn": churnNum,
		                    "cost_per_hour": costPerHour,
		                    "total_inefficiency_cost": 2000000,
		                    "roi_percent": ROI,
		                    "pre_hire_training_cost": 2565.00,
		                    "new_hire_variance_cost": 10000.00,
		                    "total_losses_per_hire": 12565.00
		                }
		            }),
		            success:function(data) {
		             	console.log('success ' + data.status  + ' ' + data.statusText) ;
      					$('.modal-background').css({ "display": "block" });
    				},
    				error: function(data){
    					console.log('error ' + data.status  + ' ' + data.statusText );
    				}

		        });

		    }
		});

});
