

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
		//autopopluate dollar sign
		if($('.current input').attr('name') === 'q4'){
			if($('#q4').val().charAt(0) !== '$'){
				$('#q4').val('$' + $('.current input').val());
			}
		}
		//calculate values
		if(e.which == 13){
			getValues();
		}

	});
	//autopopulate %
	$('#q3').on('keyup', function(e){

		var current = $('#q3').val() ;

		if(e.keyCode >= 48 && e.keyCode <= 57){			
				var newString = current.replace(/%/g, '');
				$('#q3').val(newString+ '%');
				//position cursor right before %  
				document.querySelector('#q3').setSelectionRange( $('#q3').val().length-1, $('#q3').val().length-1 );
				
		 }
	});
	//toggles arrow color
	$('input').on('input', function(){

		checkInput();		
	});

	//listen for button click
	$('.next').click(function(){
		getValues();
		checkInput();	
	});

	$('.prev').click(function(){
		getValues();
		checkInput();
	});
	//autopopulate fields
	function updateDollar(input, id){

		var val = input;
		// console.log(val);
		//autopopulate $

	}
	function checkInput(){
			console.log('checkinput ', $('input').val().length )
		if($('.current input').val().length > 0){
		
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
			$('#churn').html($('#q3').val());
			//get churn days
			if($('#q3').val() !== ''){

				churnNum = numeral().unformat($('#q3').val());

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
       	// console.log(ROI);
        
        // console.log('agentNum' + agentNum);
        // console.log('trainingDaysNum ' + trainingDaysNum);
        // console.log('churnNum ' + churnNum);
        // console.log('costPerHour ' + costPerHour);


		//update dom with values

		//section2 values
		var string = numeral(totalChurnCost).format('(0.0 a)');
		//get last char and uppercase
		var letter = string.charAt(string.length - 1).toUpperCase();

		var string2 = numeral(churnSavings).format('(0.0 a)');
		var letter2 = string2.charAt(string2.length - 1).toUpperCase();

		function newString(string){
			return string.substring(0, string.length - 1);
		}
		function upperCase(string){
			console.log(string.charAt(string.length - 1).toUpperCase());
			return string.charAt(string.length - 1).toUpperCase();

		}

		$('.section-two__value-one').html(newString(string));
		$('.section-two__letter1').html(upperCase(letter));
		$('.section-two__value-two').html(newString(string2));
		$('.section-two__letter2').html(upperCase(letter2));
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
			traditional: true,
			url: 'https://workstyledevelop.parseapp.com/api/mail-roi-report',
			type: 'post',
			headers: { "Content-Type": "application/json"},
			data: {
					"first_name": "Hunter",
					"last_name": "Sinclair",
					"email": "rbellamy@thinktiv.com",
					"num_agents": 20000,
					"training_days": 14,
					"percent_churn": 40.0,
					"cost_per_hour": 25.00,
					"total_inefficiency_cost": 15000000,
					"total_efficiency_gain": 2000000,
					"roi_percent": 201.00,
					"pre_hire_training_cost": 2565.00,
					"new_hire_variance_cost": 10000.00,
					"total_losses_per_hire": 12565.00
				}
		
		}).done(function(data){
				console.log(data);
				console.log(data.status +' '+ data.statusText);
		}).fail(function(data){
				console.log(data);
				console.log(data.status + ' ' + data.statusText);
		});

	});

				// 	"first_name": firstName,
				// "last_name": lastName,
				// "email": email,
				// "num_agents": agentNum,
				// "training_days": trainingDaysNum,
				// "percent_churn": churnNum,
				// "cost_per_hour": costPerHour,
				// "total_inefficiency_cost": totalChurnCost,
				// "total_efficiency_gain": churnSavings,
				// "roi_percent": ROI,
				// "pre_hire_training_cost": trainingDays,
				// "new_hire_variance_cost": proficiencyCost,
				// "total_losses_per_hire": newAgentCost



});


