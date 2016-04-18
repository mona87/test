

// var numeral = require('numeral')

$(function(){

	var dailyAgentCost = costPerHour*8;
    var annualAgentCost = 235 *8 * costPerHour;
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

	//listen for keydown event
	$('input').on('keydown', function(e){	


		updateDollar($('#q4').val(), 'q4');
		// updatePercent($('#q3').val(), 'q3');
		if(e.which == 13){
	
			getValues();
		}


	});
	//toggles arrow color
	$('input').on('input', function(){

		checkInput();		
	});

	//listen for button click
	$('.next').click(function(){
		getValues();
	});

	$('.prev').click(function(){
		getValues();
	});
	//autopopulate fields
	function updateDollar(input, id){

		var val = input;
		// console.log(val);
		//autopopulate $
		if($('.questions.current input').attr('name') === id){
			if(val.charAt(0) !== '$'){
				$('input').val('$' + val);
			}
		}
	}
	function updatePercent(input, id){

		var val = input;
		// console.log(val);
		//autopopulate $
		if($('.current input').attr('name') === id){
			console.log(val.charAt(val.length - 1));
			if(val.charAt(0) !== '%'){
				
				
				//console.log(val.charAt(val.length - 1));
				$('input').val(val + '%');
			}
		}
	}

	function checkInput(){
		if($('.current input').val().length > 0){
			console.log($('input').val().length )
			$('.next.show').addClass('toggle');
		}else{
			$('.next.show').removeClass('toggle');
		}
	}

	function getValues (){
			//get agent number
		if(agentNum !== $('#q1').val()){
			//add value to navbar
			$('#agents').html($('#q1').val());

			if($('#q1').val() !== ''){
				
				agentNum = numeral().unformat($('#q1').val());
			}

		}
		if(trainingDaysNum !== $('#q2').val()){
			//add val to navbar
			$('#training').html($('#q2').val());
			//get training days number
			if($('#q2').val() !== ''){
				trainingDaysNum = numeral().unformat($('#q2').val());
			}
		}
		if(churnNum !== null){
			//add val to navbar
			$('#churn').html($('#q3').val()+'%');
			//get churn days
			if($('#q3').val() !== ''){

				churnNum = numeral().unformat(('.'+$('#q3').val()));

				console.log(churnNum);
			}	
		}
		if(costPerHour !== null){
			//add val to navbar

			$('#cost').html($('#q4').val());
			//get cost per hour
			if($('#q4').val() !== ''){

				costPerHour = numeral().unformat($('#q4').val());
			}
		}

		// console.log( 'agentNum: ' +agentNum + ' trainingDaysNum: ' + trainingDaysNum + ' churnNum: ' + churnNum + ' costPerHour: ' + costPerHour);
			calculateROI( agentNum, trainingDaysNum, churnNum, costPerHour);
			 // console.log( 'agentNum: ' +agentNum + ' trainingDaysNum: ' + trainingDaysNum + ' churnNum: ' + churnNum + ' costPerHour: ' + costPerHour);
		
	}


	function calculateROI(agentNumn, trainingDaysNum, churnNum, costPerHour ){

         dailyAgentCost = costPerHour*8;
         annualAgentCost = 235 *8 * costPerHour;
         agentCost = agentNum * annualAgentCost;

         //churn cost
         trainingDays = trainingDaysNum * dailyAgentCost;
         proficiencyCost = .25 * annualAgentCost;
         newAgentCost = trainingDays + proficiencyCost;
         totalChurnCost = newAgentCost * 250;
         churnSavings = totalChurnCost * .1;

         //workstyle cost
         setUpAgents = 100 * agentNum;
         setUpChurnAgents = (agentNum * churnNum) * 100;
         runningCost = 12 * 10 * agentNum;
         totalCost = setUpAgents + runningCost +  setUpChurnAgents ;
         averageCost = totalCost/500;

         ROI = (totalChurnCost/totalCost) * .1;


        var workstyleCosts = churnSavings - totalCost;
       	console.log(ROI);
        
        // console.log('agentNum' + agentNum);
        // console.log('trainingDaysNum ' + trainingDaysNum);
        // console.log('churnNum ' + churnNum);
        // console.log('costPerHour ' + costPerHour);


		//update dom with values

		//section2 values
		$('.section-two__value-one').html(numeral(totalChurnCost).format('(0.0 a)'));
		$('.section-two__value-two').html(numeral(churnSavings).format('(0.0 a)'));
		$('.section-two__value-three').html(numeral(ROI).format('0%')+ ' ROI');

		$('#value-one').html(numeral(trainingDays).format('$0,0'));
		$('#value-two').html(numeral(proficiencyCost).format('$0,0'));
		$('#value-three').html(numeral(newAgentCost).format('$0,0'));

	}


	$('#report-button').click(function(e){
		e.preventDefault();
		console.log('fname ', $('.first-name').val());
		console.log('lname ', $('.last-name').val());
		console.log('company-name ',$('.company-name').val());

		var firstName = $('.first-name').val();
		var lastName = $('.last-name').val();
		var email = $('.email').val();
		var totalInefficiencyCost = $('.section-two__value-one').val();
		var totalEfficiencyGain = $('.section-two__value-two').val();
	


		$.ajax({
			url: 'http://work.style/api/mail-roi-report',
			type: 'post',
			headers: { "Content-Type": "application/json"},
			data: jQuery.param({
				"first_name": firstName,
				"last_name": lastName,
				"email": email,
				"num_agents": agentNum,
				"training_days": trainingDaysNum,
				"percent_churn": churnNum,
				"cost_per_hour": costPerHour,
				"total_inefficiency_cost": totalChurnCost,
				"total_efficiency_gain": churnSavings,
				"roi_percent": ROI,
				"pre_hire_training_cost": trainingDays,
				"new_hire_variance_cost": proficiencyCost,
				"total_losses_per_hire": newAgentCost
			})
		}).done(function(data){
				console.log(data);
		}).fail(function(data){
				console.log(data);
		});

	});



});


