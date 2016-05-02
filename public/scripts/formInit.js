// for ie 10 and 11
var isIE11 = !!window.MSStream;
var isieEdge = (navigator.appName == "Netscape") && (navigator.appVersion.indexOf('Trident') === -1); // IE Edge
var isIE9 = false;
var isIE8 = false;
//check for ie9
if ($('html').is('.lte-ie9')) {
    isIE9 = true;
}

if ($('html').is('.lte-ie8')) {
    isIE8 = true;
}


//after submitting form
var theForm = document.getElementById('theForm');

if (isIE11) {
    console.log('ie11')
    $('.next, .prev').css({ 'bottom': '55px' });
    $('.next, .prev').addClass('move-arrow-ie2');
}
if(!isIE8){


new stepsForm(theForm, {
    onSubmit: function(form) {

        if (!isIE9) {

            $('body').css({ "overflow": "visible" });
            $('.bgImg').css({ "min-height": "100%" });
            // $('#page2').slideToggle( "100",function(){

            // });

            $('#page2').css({ 'min-height': '100px', 'transform': "translateY(-700px)", "margin-bottom": "-700px", "left": "0" });
            $('#page1').css({ "position": "relative", "transform": "translateY(-725px)" });


            //       $('#page2').show( function(){
            //       	 $('#page1').css({ "position": "relative", "transform": "translateY(-725px)" });
            // 	$('#page2').css({ "transform": "translateY(-700px)", "margin-bottom":"-700px" });

            // });
            $('.arrow-down').css({ "margin-bottom": "5px", "transform": "rotate(180deg)" });
            $('.nav-logo').hide();
            $('#navbar > div, #navbar img:not(:first-child), #navbar span').show();
            // $('#navbar ').css("display", "flex");
            $('.bgImg').css({ "position": "absolute" });
            //for ie10 and up
            if (isIE11) {

                // if (Object.hasOwnProperty.call(window, "ActiveXObject") && !window.ActiveXObject) {
                $('.wrapper').addClass('ie');
                $('#page2').css({ 'min-height': '3205px', 'transform': "translateY(-700px)", 'position': 'relative', "margin-bottom": "-700px", "left": "0", 'top': '0' });
                // $('#page2').css({'position':'relative','margin-bottom':'-700px'});

                $('#main4 div:not(:first-child)').css({ 'min-width': 'inherit', 'width': 'inherit' });

                $('#main3 h2').css({ 'padding-top': '50px' });
                $('#costPerHire, #variance, #losess').css({ 'max-width': '250px' });
                $('.plus, .equal').css({ 'min-width': '250px', 'width': '250px', 'min-width': '75px', 'width': 'auto' });
            } //for ie10 and ie11
            if (isIE11 && !isieEdge) {
                $('#main5 .arrow-yellow').addClass('ie-arrow-pos');
                $('.values > div').addClass('.ie-values-padding');
                $('.values > div').css({ 'padding-top': '10px' });
            }
        }

    }
});

if (!isIE9) {
    //toggle page slide
    $('.open').click(function() {


        //hides form
        if ($('#page1').hasClass('toggled')) {
            $('.bgImg').css({ "min-height": "100%" });
            $('#page1').css({ "transform": "translateY(-725px)" }).removeClass('toggled');
            $('#page2').css({ "transform": "translateY(-700px)", "margin-bottom": "-700px" });
            $('.arrow-down').css({ "margin-bottom": "5px", "transform": "rotate(180deg)" });
            if (isIE11) {
                // $('.wrapper').addClass('ie');
                $('#page2').css({ 'min-height': '3205px', 'transform': "translateY(-700px)", 'position': 'relative', "margin-bottom": "-700px", "left": "0" });
                // $('#page2').css({'position':'relative','margin-bottom':'-700px'});

            }

        } else {
            $('.bgImg').css({ "min-height": "0" });
            $('#page1').css({ "transform": "translateY(0px)" }).addClass('toggled');
            $('#page2').css({ "transform": "translateY(0px) " });
            $('.arrow-down').css({ "margin-bottom": "0px", "transform": "rotate(0deg)" });

            if (isIE11) {
                // $('.wrapper').addClass('ie');
                $('#page2').css({ 'position': 'relative', 'margin-bottom': '0px', 'top': '0' })
            }
        }


    });



}
}
