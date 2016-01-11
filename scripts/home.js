var React = require('react');

var Home = React.createClass({
	getInitialState: function() {
		return {
			number:0,
			response: "That's good"
		};
	},
	down: function(){
		if (this.state.number == 0) {
			this.setState({
				response:"NOOOO, that's too low!" 
			});
		} else {
			this.setState({
				number: this.state.number - 1 
			});
		}	
	},
	up: function() {
		this.setState({
			response:"woah, that's better"
		});
		this.setState({
			number: this.state.number + 1
		});

	},
	render: function() {
		return (
			<div>
				<h1>{this.state.number}</h1>
				<h4>{this.state.response}</h4>
				<button onClick={this.up}>Up</button>
				<button onClick={this.down}>Down</button>
			</div>
		);
	}
});

module.exports = Home;