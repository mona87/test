
//get params from url
var url ='http://work.style/roi_pdf?num_agents=20000&training_days=14&percent_churn=40.0&cost_per_hour=25.00';

var param_array = url.split('?')[1].split('&');

var params = {};
$(param_array).each(function(index){
    var x = param_array[index].split('=');
    params[x[0]] = x[1];
})
console.log(params);
console.log(params.num_agents);
    console.log(params.num_training_days);
//add values
$('.agents').html(params.num_agents);
$('.training').html(params.training_days);
$('.churn').html(params.percent_churn);
$('.cost').html(params.cost_per_hour);

if(params !== null){

    console.log(params.num_training_days)

    var training_days = numeral().unformat(params.percent_churn);
    var percent_churn = numeral().unformat(params.percent_churn);

    // calculateROI(params.num_agents, training_days, percent_churn, params.cost_per_hour);
     calculateROI(500, 10, .50, 15);
}

    function calculateROI(agentNum, trainingDaysNum, churnNum, costPerHour ){

        
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

         var ROI = totalChurnCost/totalCost;

        var workstyleCosts = churnSavings - totalCost;
        
        console.log('agentNum' + agentNum);
        console.log('trainingDaysNum ' + trainingDaysNum);
        console.log('churnNum ' + churnNum);
        console.log('costPerHour ' + costPerHour);



        //update dom with values

        //section2 values
        $('.section-two__value-one').html(numeral(agentCost).format('(0.0 a)'));
        $('.section-two__value-two').html(numeral(churnSavings).format('(0.0 a)'));
        $('.section-two__value-three').html(numeral(ROI).format('0.00 %')+ ' ROI');

        $('.section-three__value').html(numeral(newAgentCost).format('$0,0.00'));

    }


$(window).load(function (){
	    //extra method to center text
    jsPDF.API.centerText = function(txt, size) {
        var fontSize = this.internal.getFontSize();
        var pageWidth = this.internal.pageSize.width * size;
        var txtWidth = this.getStringUnitWidth(txt) * fontSize / this.internal.scaleFactor;
        // Calculate text's x coordinate
        var x = (pageWidth - txtWidth) / 2;
        var info = {
            text: txt,
            x: x
        }
        return info
    }


	var pdf = new jsPDF('p', 'pt', 'a4');
	console.log('true');
	var options = {
	         background: '#fff',
	         logging: true,
	       
	    };

     pdf.addHTML($('.container'), options, function(){
     	 
     	pdf.output('dataurlnewwindow', {}) 
     });

});