// var numeral = require('numeral');

$(function(){

	

	var agentNum = null;
	var trainingDaysNum = null;
	var churnNum = null;
	var costPerHour = null;

	//listen for keydown event
	$('input').on('keydown', function(e){
		if(e.which == 13){
			getValues();
		}
	});

	//listen for button click
	$('.next').click(function(){
		getValues();
	})

	function getValues (){
			//get agent number
		if(agentNum === null){
			//add value to navbar
			$('#agents').html($('#q1').val());
			agentNum = numeral().unformat($('#q1').val());
		}else if(trainingDaysNum === null){
			//add val to navbar
			$('#training').html($('#q2').val());
			//get training days number
			trainingDaysNum = numeral().unformat($('#q2').val());
		}else if ( churnNum === null){
			//add val to navbar
			$('#churn').html($('#q3').val());
			//get churn days
			churnNum = numeral().unformat($('#q3').val());
			
		}else if(costPerHour  === null){
			//add val to navbar
			$('#cost').html($('#q4').val());
			//get cost per hour
			costPerHour = numeral().unformat($('#q4').val());
		}

			calculateROI( agentNum, trainingDaysNum, churnNum, costPerHour);
			 console.log( 'agentNum: ' +agentNum + ' trainingDaysNum: ' + trainingDaysNum + ' churnNum: ' + churnNum + ' costPerHour: ' + costPerHour);
		
	}


	function calculateROI(agentNumn, trainingDaysNum, churnNum, costPerHour ){

		//assumptions
		var costPerMin = costPerHour/60;
		var trainingCost = trainingDaysNum * costPerMin * costPerHour;

		//training
		var cost = trainingDaysNum * 8 * costPerHour;

		//time to Proficiency (235 days)
		var annualBurdenCost = 235 * 8 * costPerHour;
		var productivityVariance = .25;
		var costPerAgent = annualBurdenCost * productivityVariance;
		var incrementCost = costPerAgent + cost;

		//workstyleCost 
		var setUp = 100;
		var monthlyUSD = 180;
		var setupCosts = (agentNum * setUp) + (agentNum * churnNum * setUp);
		var runningCosts = agentNum * monthlyUSD;
		var total = setupCosts + runningCosts;

		//return on Investment
		var churnCosts = agentNum * churnNum * incrementCost;
		var churnReduction = .1 * churnCosts;
		var workstyleCosts = total;
		var ROI = churnReduction/workstyleCosts;


		console.log('churn costs: ' + churnCosts);
		console.log('10% churn reduction: ' + churnReduction);
		console.log('workstyle: ' + workstyleCosts);
		console.log('ROI: ' + Math.round((ROI.toFixed(2)) * 100)+ '%');

		//update dom with values

		//section2 values
		$('.section-two__value-one').html(numeral(churnCosts).format('(0.0 a)'));
		$('.section-two__value-two').html(numeral(churnReduction).format('(0.0 a)'));
		$('.section-two__value-three').html(Math.round((ROI.toFixed(2)) * 100)+ '% ROI');

		// $('#value-one').html(numeral().format('$0,0'));
		$('#value-two').html(numeral(productivityVariance).format('$0,0'));
		$('#value-three').html(numeral(costPerAgent).format('$0,0'));

	}


});


