import React from 'react';
import { render } from 'react-dom';
import numeral from 'numeral';
import stepsForm from '../scripts/stepsForm';
import calculator from './calculator';
 
stepsForm();

export default class Form extends React.Component {
	constructor (props){
    super(props)
    this.state = {
      agentNum: null,
      trainingDaysNum: null,
      churnNum: null,
      costPerHour: null
    }
  }
  		//after submitting form

  	getValues(){
		if(this.state.agentNum === null){
			//add value to navbar
			// $('#agents').html($('#q1').val());
			this.setState({agentNum: this.refs.q1.value});
		}else if(this.state.trainingDaysNum === null){
			//add val to navbar
			// $('#training').html($('#q2').val());
			//get training days number
			this.setState({trainingDaysNum: numeral().unformat(this.refs.q2.value)});
		}else if ( this.state.churnNum === null){
			//add val to navbar
			// $('#churn').html($('#q3').val());
			//get churn days
			this.setState({churnNum: numeral().unformat(this.refs.q3.value)});
			
		}else if(costPerHour  === null){
			//add val to navbar
			// $('#cost').html($('#q4').val());
			//get cost per hour
			this.setState({costPerHour: numeral().unformat(this.refs.q4.value)});
			 calculator(this.state.agentNum, this.state.trainingDaysNum, this.state.churnNum, this.state.costPerHour);

		}
		 console.log( 'agentNum: ' +this.state.agentNum + ' trainingDaysNum: ' + this.state.trainingDaysNum + ' churnNum: ' + this.state.churnNum + ' costPerHour: ' + this.state.costPerHour);
			
		}

	render () {
		return (
				<section id="page1">
					<section id="main1">
					<h1>Calculate Your Emotional Connection ROI</h1>
					<h2>Agent Personality Training</h2>
					<h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3>
					</section>
					<form id="theForm" className="simform" autoComplete="off">
					<div className="simform-inner">
						<ol className="questions">
							<li>
								<span><label htmlFor="q1">Whats your total agent count?</label></span>
								<input ref="q1" id="q1" name="q1" type="text"></input>
							</li>
							<li>
								<span><label htmlFor="q2">How many training days?</label></span>
								<input ref="q2" id="q2" name="q2" type="text"></input>
							</li>
							<li>
								<span><label htmlFor="q3">What is your annual churn?</label></span>
								<input  ref="q3" id="q3" name="q3" type="text"></input>
							</li>
							<li>
								<span><label htmlFor="q4">What is your agent fully loaded cost per hr?</label></span>
								<input ref="q4" id="q4" name="q4" type="text"></input>
							</li>
						</ol>
						<button className="submit" type="submit">Send answers</button>
						<div className="controls">
							<button className="next" onClick={this.getValues.bind()} ></button>
							<div className="progress"></div>
							<span className="number">
								<span className="number-current"></span>
								<span className="number-total"></span>
							</span>
							<span className="error-message"></span>
						</div>
					</div>
					<span className="final-message"></span>
				</form>
				</section>
		)
	}
}