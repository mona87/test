// $(function(){
//     var scale = 'scale(.)';
// document.body.style.webkitTransform = scale;  // Chrome, Opera, Safari
//  document.body.style.msTransform =  scale;     // IE 9
//  document.body.style.transform = scale;     // General

// })
//http://work.style/roi_pdf/?num_agents=20000&training_days=10&percent_churn=50&cost_per_hour=15

    // console.log('width',$('.container').width());
    // console.log('height',$('.container').height());

    // http://work.style/roi_pdf/?num_agents=500&training_days=15&percent_churn=0.5&cost_per_hour=15

var url = window.location.href;

// var url ='http://work.style/roi_pdf?num_agents=20000&training_days=10&percent_churn=50&cost_per_hour=15.00';
console.log(url);
var param_array = url.split('?')[1].split('&');

var params = {};
$(param_array).each(function(index){
    var x = param_array[index].split('=');
    params[x[0]] = x[1];
})
console.log(params);
console.log(params.num_agents);
    console.log(params.training_days);
//add values
$('.agents').html(params.num_agents);
$('.training').html(params.training_days);
$('.churn').html(params.percent_churn + '%');
$('.cost').html('$' + params.cost_per_hour);

if(params !== null){

    console.log(params.training_days)

    var cost_per_hour = numeral().unformat(params.cost_per_hour);
    // var percent_churn = '.' + numeral().unformat(params.percent_churn);

    calculateROI(params.num_agents, params.training_days, params.percent_churn, cost_per_hour);
     // calculateROI(500, 10, .50, 15);
}

    function calculateROI(agentNum, trainingDaysNum, churnNum, costPerHour ){

        
         var dailyAgentCost = costPerHour*8;
         var annualAgentCost = 235 *8 * costPerHour;
         var agentCost = agentNum * annualAgentCost;

         //churn cost
         var trainingDays = trainingDaysNum * dailyAgentCost;
         var proficiencyCost = .25 * annualAgentCost;
         var noChurn = .15 * annualAgentCost;
         var newAgentCost = trainingDays + proficiencyCost;
         var totalChurnCost = newAgentCost *(agentNum * churnNum);
         var agentSubperformance = noChurn * (1- churnNum)* agentNum;
         var churnSavings = totalChurnCost * .1;
         var agentProductivityImprove = .05 * agentSubperformance;
         var existUnderperform = churnSavings + agentProductivityImprove;

         //workstyle cost
         var setUpAgents = 125 * agentNum;
         var setUpChurnAgents = (agentNum * churnNum) * 125;
         var runningCost = 12 * 10 * agentNum;
         var totalCost = setUpAgents + runningCost +  setUpChurnAgents ;
         var averageCost = totalCost/500;

         ROI = (existUnderperform-totalCost)/totalCost;
        if(ROI <= 0){
            ROI = 1;
         }

        var workstyleCosts = churnSavings - totalCost;



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

        //section2 values
        $('.section-two__value-one').html(newString(string));
        $('.section-two__letter1').html(upperCase(letter));
        $('.section-two__value-two').html(newString(string2));
        $('.section-two__letter2').html(upperCase(letter2));
        // $('.section-two__value-three').html(numeral(ROI).format('0.00 %')+ ' ROI');
        $('.section-two__value-three').html(numeral(ROI).format('0%')+ ' ROI');
        $('.section-three__value').html(numeral(newAgentCost).format('$0,0'));

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



    console.log('height ', $('.container').height());
    html2canvas($('.container'), {
      height: 2526,
      background: '#fff'
    }).then(function(canvas){
        var imgData = canvas.toDataURL('image/jpeg', 1.0);
        // pdf.addImage(imgData, 'JPEG', 0, 0, 513, 709);
          pdf.addImage(imgData, 'JPEG', 0, 0, 595.28, 841.89);


            // var data = pdf.output();

             // var buffer = new ArrayBuffer(data.length);
             //    var array = new Uint8Array(buffer);
             //    for (var i = 0; i < data.length; i++) {
             //      array[i] = data.charCodeAt(i);
             //    }

             //    var blob = blobUtil.createBlob(
             //      [array],
             //      {type: 'application/pdf', encoding: 'raw'}
             //    );

             //    console.log(blob);
             //    var blobURL = blobUtil.createObjectURL(blob);
             //    console.log(blobURL);
             //    window.open(blobURL);

            // blobUtil.dataURLToBlob(imgData).then(function (blob) {
            // // ladies and gents, we have a blob 
            //     console.log(blob)
            //     var file = blobUtil.createBlob([imgData], {type: 'application/pdf'});
            //   var blobURL = blobUtil.createObjectURL(file);
            //   window.open(blobURL);
            //  console.log(blobURL);
            // }).catch(function (err) {
            //     console.log(err);
            //   // image failed to load 
            // });
           
             // pdf.output('dataurlnewwindow', {}); 
             pdf.output('datauri'); 
             // var string = pdf.output('datauristring'); 
             // console.log(string);
                // window.open(string, _self);
         // window.open(imgData)
    });



     // pdf.addHTML($('.container'), options, function(){
     	 
     // 	// pdf.output('dataurlnewwindow', {}) 
     // });




});