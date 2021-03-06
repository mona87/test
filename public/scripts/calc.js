// var numeral = require('numeral')

$(document).ready(function() {

    if (!window.console) {
        console = {};
        console.log = function() {};
    }

    var isIE9 = false;
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

    $('input').val('');
    $('.current input').focus();

    //check for ie9
    if ($('html').is('.lte-ie9')) {
        isIE9 = true;
    }
    if ($('html').is('.lte-ie8')) {
        isIE8 = true;
    }

    if (!isIE8) {
        //listen for keydown event
        $('input').on('keydown', function(e) {
            //autopopluate dollar sign
            if ($('.current input').attr('name') === 'q4') {
                if ($('#q4').val().charAt(0) !== '$') {
                    $('#q4').val('$' + $('.current input').val());
                }
            }

            //calculate values
            if (e.which == 13) {
                // addHints();
                getValues();

                if (isIE9) {
                    if($('.current input').attr('name') !== 'q1' ){
                         $('.prev-arrow').show();
                    }
                    // if ($('.current input').attr('name') === 'q1' || $('.current input').attr('name') === 'q2') {
                    //     $('.next').css({ 'bottom': '53px' });
                    // } else {
                    //     $('.next').css({ 'bottom': '55px' });
                    // }

                    if ($('.current input').attr('name') === 'q4' && $('.current input').val().length > 1) {
                        slide();
                        if ($('.nav-bar-ie').css('display') === 'none') {
                            $('.nav-bar-ie').css({ 'display': 'block' });
                        } else {
                            $('.nav-bar-ie').css({ 'display': 'none' });
                        }

                        $('#navbar, #navbar > div, #navbar img:not(:first-child), #navbar span').css({ 'display': 'inline-block' });
                    }
                }
            }



        });
        //autopopulate %
        $('#q3').on('keyup', function(e) {


            var current = $('#q3').val();

            if (e.keyCode >= 48 && e.keyCode <= 57) {
                var newString = current.replace(/%/g, '');
                $('#q3').val(newString + '%');
                //position cursor right before %  
                document.querySelector('#q3').setSelectionRange($('#q3').val().length - 1, $('#q3').val().length - 1);

            }
        });
        //toggles arrow color
        $('input').on('input', function() {

            checkInput();
        });




        if (isIE9) {

            //listen for button click
            $('.next-arrow').click(function() {
                getValues();

                if($('.current input').attr('name') !== 'q1' ){
                     $('.prev-arrow').show();
                }
                // slide();
                 // $('#navbar, #navbar > div, #navbar img:not(:first-child), #navbar span').css({ 'display': 'inline-block' });
                // if ($('.current input').attr('name') === 'q3' || $('.current input').attr('name') === 'q4') {
                //     $('.next').css({ 'bottom': '53px' });
                // } else {
                //     $('.next').css({ 'bottom': '55px' });
                // }

                checkInput();
                if ($('.current input').attr('name') === 'q4' && $('.current input').val().length > 1) {
                           $('#navbar').show();
                     $('#navbar > div, #navbar img:not(:first-child), #navbar span').css({ 'display': 'inline-block' });
                    slide();

                   
                }
                if ($('.current input').attr('name') === 'q4') {
                    $('.number-current').val('');
                }

            

            });

            $('.prev-arrow').click(function() {
                hidePrev();
            });

            $('.open').click(function() {
                slide();
              
                    $('#navbar').show();
                
            });

        } else {
            //all other browsers
            $('.next').click(function() {
                getValues();
                checkInput();

            });
        }



        $('.prev').click(function() {
            getValues();

            checkInput();

            if(isIE9){

                // if ($('.current input').attr('name') === 'q1' || $('.current input').attr('name') === 'q2') {
                //     $('.next').css({ 'bottom': '53px' });
                // } else {
                //     $('.next').css({ 'bottom': '55px' });
                // }
            }
        });

        function hidePrev(){
                if ($('.current input').attr('name') === 'q1' ) {
                     $('.prev-arrow').hide();
                 }else{
                     $('.prev-arrow').show();
                }
        }


        function slide() {
            $('#page2').show();

            if ($('#page1').height() === 800) {

                $('#page1').animate({ height: 75 }, 200);
            } else {
                $('#page1').animate({ height: 800 }, 200);
            }

        }

        //autopopulate fields
        function updateDollar(input, id) {

            var val = input;
            // console.log(val);
            //autopopulate $

        }

        function checkInput() {
            console.log('checkinput ', $('input').val().length)
            if ($('.current input').val().length > 0) {

                $('.next.show').addClass('toggle');
            } else {
                $('.next.show').removeClass('toggle');
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

                    // console.log(churnNum);
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
            ROI = existUnderperform / totalCost;


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
                console.log(string.charAt(string.length - 1).toUpperCase());
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



            // console.log('fname ', $('.first-name').val());
            // console.log('lname ', $('.last-name').val());
            // console.log('company-name ', $('.company-name').val());

            var firstName = $('.first-name').val();
            var lastName = $('.last-name').val();
            var email = $('.company-name').val();
            var totalInefficiencyCost = $('.section-two__value-one').val();
            var totalEfficiencyGain = $('.section-two__value-two').val();

            if (validator.isNull(firstName)) {
                $('#first-name-err').show();
            } else {
                $('#first-name-err').hide();
            }
            if (validator.isNull(lastName)) {
                $('#last-name-err').show();
            } else {
                $('#last-name-err').hide();
            }
            if (validator.isNull(email) || !validator.isEmail(email)) {
                $('#email-err').show();
            } else {
                $('#email-err').hide();
            }

            if (firstName.length > 0 && lastName.length > 0 && validator.isEmail(email)) {

                $.support.cors = true;
                $.ajax({
                    url: 'https://my.work.style/api/mail-roi-report/',
                    type: 'POST',
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
                    })
                }).done(function(data) {
                    $('.modal-background').css({ "display": "flex" });
                    if (isIE9) {
                        // console.log('ie9 sent')
                        // $('.modal-background').css({"display":"block"});
                    }

                    console.log(data);
                    console.log(data.status + ' ' + data.statusText);
                }).fail(function(data) {
                    console.log(data);
                    console.log('status: ', data.status + ' ' + data.statusText);
                });

            }

        });


    }


});
