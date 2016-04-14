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

         var dailyAgentCost = costPerHour*8;
         var annualAgentCost = 235 *8 * costPerHour;
         var agentCost = agentNum * annualAgentCost;

         //churn cost
         var trainingDays = trainingDaysNum * dailyAgentCost;
         var proficiencyCost = .25 * annualAgentCost;
         var newAgentCost = trainingDays + proficiencyCost;
         var totalChurnCost = newAgentCost * 250;
         var churnSavings = totalChurnCost * .1;

         //workstyle cost
         var setUpAgents = 100 * agentNum;
         var setUpChurnAgents = (agentNum * churnNum) * 100;
         var runningCost = 12 * 10 * agentNum;
         var totalCost = setUpAgents + runningCost +  setUpChurnAgents ;
         var averageCost = totalCost/500;

         var ROI = Math.round((totalChurnCost/totalCost).toFixed(2));

        var workstyleCosts = churnSavings - totalCost;
        
        console.log('agentNum' + agentNum);
        console.log('trainingDaysNum ' + trainingDaysNum);
        console.log('churnNum ' + churnNum);
        console.log('costPerHour ' + costPerHour);


		//update dom with values

		//section2 values
		$('.section-two__value-one').html(numeral(totalChurnCost).format('(0.0 a)'));
		$('.section-two__value-two').html(numeral(churnSavings).format('(0.0 a)'));
		$('.section-two__value-three').html(numeral(ROI).format('0%')+ ' ROI');

		$('#value-one').html(numeral(newAgentCost).format('$0,0'));
		$('#value-two').html(numeral(agentCost).format('$0,0'));
		$('#value-three').html(numeral(totalCost).format('$0,0'));

	}
});


