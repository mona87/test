/**
 * stepsForm.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2014, Codrops
 * http://www.codrops.com
 */



// var classie = require('./classie');

( function( window ) {
	
	'use strict';

	var transEndEventNames = {
			'WebkitTransition': 'webkitTransitionEnd',
			'MozTransition': 'transitionend',
			'OTransition': 'oTransitionEnd',
			'msTransition': 'MSTransitionEnd',
			'transition': 'transitionend'
		},
		transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
		support = { transitions : Modernizr.csstransitions };

	function extend( a, b ) {
		for( var key in b ) { 
			if( b.hasOwnProperty( key ) ) {
				a[key] = b[key];
			}
		}
		return a;
	}

	function stepsForm( el, options ) {
		this.el = el;
		this.options = extend( {}, this.options );
  		extend( this.options, options );
  		this._init();
	}

	stepsForm.prototype.options = {
		onSubmit : function() { return false; }
	};

	stepsForm.prototype._init = function() {
		// current question
		this.current = 0;

		// questions
		this.questions = [].slice.call( this.el.querySelectorAll( 'ol.questions > li' ) );
		// total questions
		this.questionsCount = this.questions.length;
		// show first question
		classie.addClass( this.questions[0], 'current' );
		
		// next question control
		this.ctrlNext = this.el.querySelector( 'button.next' );

		// next question control
		this.ctrlPrev = this.el.querySelector( 'button.prev' );

		// progress bar
		this.progress = this.el.querySelector( 'div.progress' );
		
		// question number status
		this.questionStatus = this.el.querySelector( 'span.number' );
		// current question placeholder
		this.currentNum = this.questionStatus.querySelector( 'span.number-current' );
		this.currentNum.innerHTML = Number( this.current + 1 );
		// total questions placeholder
		this.totalQuestionNum = this.questionStatus.querySelector( 'span.number-total' );
		this.totalQuestionNum.innerHTML = this.questionsCount;

		// error message
		this.error = this.el.querySelector( 'span.error-message' );
		
		// init events
		this._initEvents();
	};

	stepsForm.prototype._initEvents = function() {
		var self = this,
			// first input
			firstElInput = this.questions[ this.current ].querySelector( 'input' ),
			// focus
			onFocusStartFn = function() {
				firstElInput.removeEventListener( 'focus', onFocusStartFn );
				classie.addClass( self.ctrlNext, 'show' );
				classie.addClass( self.ctrlPrev, 'show' );
			};

		// show the next question control first time the input gets focused
		firstElInput.addEventListener( 'focus', onFocusStartFn );

		// show next question
		this.ctrlNext.addEventListener( 'click', function( ev ) { 
			ev.preventDefault();
			self._nextQuestion(); 
		} );

		// show prev question
		this.ctrlPrev.addEventListener( 'click', function( ev ) { 
			ev.preventDefault();
			self._prevQuestion(); 
		} );

		// pressing enter will jump to next question
		document.addEventListener( 'keydown', function( ev ) {
			var keyCode = ev.keyCode || ev.which;
			// enter
			if( keyCode === 13 ) {
				ev.preventDefault();
				self._nextQuestion();
			}
		} );

		// disable tab
		this.el.addEventListener( 'keydown', function( ev ) {
			var keyCode = ev.keyCode || ev.which;
			// tab
			if( keyCode === 9 ) {
				ev.preventDefault();
			} 
		} );
	};

	stepsForm.prototype._prevQuestion = function() {
		if( !this._validade() ) {
			return false;
		}

		//reset count
		if(this.current >= this.questions.length){
			this.current = this.questions.length;

		}
		console.log('prev ', this.current);
		// current question
		var currentQuestion = this.questions[ this.current ];
		
		//show and hide back arrow
		if(this.current <= 1 ){
			document.querySelector('.prev').style.display = 'none';

		}else{
				document.querySelector('.prev').style.display = 'block';
		}

		//show and hide next arrow
		if(this.current === this.questions.length ){
			document.querySelector('.next').style.display = 'none';
		}else{
			document.querySelector('.next').style.display = 'block';
		}

		// decrement current question iterator
		--this.current;

		// update progress bar
		this._progress();


			//update numbers

			this._updateQuestionNumber();
			//hack to remove extra numbers from questionStatus
			var elements = document.querySelectorAll('.number-next');
			if(elements.length > 1){
				this.questionStatus.removeChild(elements[0]);
			}
			console.log(this.questionStatus);

			// add class "show-next" to form element (start animations)
			classie.addClass( this.el, 'show-next' );

			// current question
			var prevQuestion = this.questions[ this.current ];
			classie.removeClass( currentQuestion, 'current' );
			classie.addClass( prevQuestion, 'current' );
			console.log(currentQuestion);

	


		var self = this, onEndTransitionFn = function( ev ) {
				if( support.transitions ) {
					this.removeEventListener( transEndEventName, onEndTransitionFn );
				}
				else {
					classie.removeClass( self.el, 'show-next' );
					self.currentNum.innerHTML = self.nextQuestionNum.innerHTML;
					self.questionStatus.removeChild( self.nextQuestionNum );
					// force the focus on the next input
					prevQuestion.querySelector( 'input' ).focus();
				}
			};

		if( support.transitions ) {
			this.progress.addEventListener( transEndEventName, onEndTransitionFn );
		}
		else {
			onEndTransitionFn();
		}

	}

	stepsForm.prototype._nextQuestion = function() {

		if( !this._validade() ) {
			return false;
		}


		// check if form is filled
		if( this.current === this.questionsCount - 1 ) {
			this.isFilled = true;
		}

		// clear any previous error messages
		this._clearError();

		//hide back button on first question
		if(this.current < 0){
			
				document.querySelector('.prev').style.display = 'none';
				
		}else{
				document.querySelector('.prev').style.display = 'block';
			
		}

		if(this.current === this.questions.length - 2){
			document.querySelector('.next').style.display = 'none';
		}else{
				document.querySelector('.next').style.display = 'block';
		}

		// current question
		var currentQuestion = this.questions[ this.current ];
	
	// 	if(this.current >= 3){
	// 		console.log('current is equal to 3 ',this.current);
	// 		// increment current question iterator
	// 		++this.current;
	// 		// update progress bar to 100% and then reset to current
	// 		this._progress();
	// 		--this.current;

	// 	}else{

	// 	// increment current question iterator
	// 	++this.current;
	// 		// console.log('current ', this.current);
	// 	// update progress bar
	// 	this._progress();
	// }

			++this.current;
	// 		// console.log('current ', this.current);
	// 	// update progress bar
		if(this.current <= 3){
				this._progress();
		}
	

		if( this.current <= this.questions.length-1) {
					console.log('current ', this.current);
					console.log('length ', this.questions.length-1);
			// change the current question number/status
			this._updateQuestionNumber();
			//hack to remove extra numbers from questionStatus
			var elements = document.querySelectorAll('.number-next');
			if(elements.length > 1){
				this.questionStatus.removeChild(elements[0]);
			}

			// add class "show-next" to form element (start animations)
			classie.addClass( this.el, 'show-next' );

			// remove class "current" from current question and add it to the next one
			// current question
			var nextQuestion = this.questions[ this.current ];
				classie.removeClass( currentQuestion, 'current' );
				classie.addClass( nextQuestion, 'current' );
			
		
		}

		// after animation ends, remove class "show-next" from form element and change current question placeholder
		var self = this,
			onEndTransitionFn = function( ev ) {

				if( support.transitions ) {
					this.removeEventListener( transEndEventName, onEndTransitionFn );
				}
				if( self.current >= 3 ) {
					self.current = 3;
					nextQuestion.querySelector( 'input' ).focus();
					// self._submit();
				}
				else {
					console.log('no')
					classie.removeClass( self.el, 'show-next' );
					self.currentNum.innerHTML = self.nextQuestionNum.innerHTML;
					// self.questionStatus.removeChild( self.nextQuestionNum );
					// force the focus on the next input
					nextQuestion.querySelector( 'input' ).focus();
				}
			};

		if( support.transitions ) {
			this.progress.addEventListener( transEndEventName, onEndTransitionFn );
		}
		else {
			onEndTransitionFn();
		}
		if(document.querySelector('#q4').value.length > 0 && this.current > 3){
			this.current = 3;
			self._submit();
		}
	}

	// updates the progress bar by setting its width
	stepsForm.prototype._progress = function() {
	
		this.progress.style.width = (this.current + 1) * ( 100 / this.questionsCount ) + '%';
		
	}

	// changes the current question number
	stepsForm.prototype._updateQuestionNumber = function(val) {
		// first, create next question number placeholder
		this.nextQuestionNum = document.createElement( 'span' );
		this.nextQuestionNum.className = 'number-next';
		this.nextQuestionNum.innerHTML = Number( this.current + 1 );
		// insert it in the DOM
		this.questionStatus.appendChild( this.nextQuestionNum );
	}
	// submits the form
	stepsForm.prototype._submit = function() {
		this.options.onSubmit( this.el );
	}

	// TODO (next version..)
	// the validation function
	stepsForm.prototype._validade = function() {
		// current question´s input
		var input = this.questions[ this.current ].querySelector( 'input' ).value;
		if( input === '' ) {
			this._showError( 'EMPTYSTR' );
			return false;
		}

		return true;
	}

	// TODO (next version..)
	stepsForm.prototype._showError = function( err ) {
		var message = '';
		switch( err ) {
			case 'EMPTYSTR' : 
				message = 'Please fill the field before continuing';
				break;
			case 'INVALIDEMAIL' : 
				message = 'Please fill a valid email address';
				break;
			// ...
		};
		this.error.innerHTML = message;
		classie.addClass( this.error, 'show' );
	}

	// clears/hides the current error message
	stepsForm.prototype._clearError = function() {
		classie.removeClass( this.error, 'show' );
	}

	// add to global namespace
	window.stepsForm = stepsForm;

})( window );





