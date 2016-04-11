$(window).load(function (){


	var pdf = new jsPDF('p', 'pt', 'a4');
var options = {
         background: '#fff',
         logging: true,
       
    };

     pdf.addHTML($('.container'), options, function(){
     	  // console.log("true");
     	// pdf.output('dataurlnewwindow', {}) 
     });

});