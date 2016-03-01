var React = require('react');
var ReactDOM = require('react-dom');

var Modal = require('./modal.jsx');


var ModalWindow = React.createClass({

	getInitialState: function(){
		return {
			open: false,
		}
	},
	getDefaultProps: function() {
		return {
			type: 'div'
		};
	},
	componentWillReceiveProps: function(nextProps) {
		if(nextProps.open !== this.props.open){
			this.setState({open:nextProps.open})
		}
	},
	toggle: function(state){
		this.setState({open:state});
		if(typeof(state) == 'object'){
			state = !this.state.open;
		}
	},
	mapChildren: function(child){
		return React.cloneElement(child, {toggle: this.toggle});
	},
	render: function(){
		var children = React.Children.map(this.props.children, this.mapChildren);
		return (
			<div onClick={this.toggle} {...this.props}>
				{this.props.label}
				<Modal className="modal-inner" isOpen={this.state.open} close={this.toggle.bind(this,false)}>
					{children}
				</Modal>
			</div>
		)
	}
});


module.exports = ModalWindow;
