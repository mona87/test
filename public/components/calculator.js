
export default function calculateROI(agentNumn, trainingDaysNum, churnNum, costPerHour ){

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

		// $('#inefficeincyCosts').html(numeral(churnCosts).format('$0,0') + ' M');
		// $('#gains').html(numeral(churnReduction).format('$0,0') + ' M');
		// $('#roi').html(Math.round((ROI.toFixed(2)) * 100)+ '% ROI');

		// $('#losses').html(numeral().format('$0,0'));
		// $('#variance').html(numeral(productivityVariance).format('$0,0'));
		// $('#costPerHire').html(numeral(costPerAgent).format('$0,0'));

	}