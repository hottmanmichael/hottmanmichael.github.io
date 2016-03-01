var React = require('react');
var Home = require('./scripts/home.js')
class App extends React.Component {
	render() {
		return (
			<div>
				<Home />
			</div>
		);
	}
}

module.exports = App;
