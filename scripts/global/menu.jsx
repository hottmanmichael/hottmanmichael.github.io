'use strict'
var React = require("react");
var ReactDOM = require("react-dom");

var Menu = React.createClass({

   mapChildren: function(child){
      console.log("child: " , child);
		return React.cloneElement(child);
	},

   componentWillReceiveProps: function(nextProps) {
      console.log("nextProps: ", nextProps);
   },

   render: function(){
      var children = React.Children.map(this.props.children, this.mapChildren);
      return (
         <div className="menu-box-outer">
            <div className="menu-box-inner">
               {children}
            </div>
         </div>
      )
   }
});

module.exports = Menu;
