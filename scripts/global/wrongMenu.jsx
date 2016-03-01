var React = require("react");
var ReactDOM = require("react-dom");

var Menu = React.createClass({

   //FIXME: ADD validation for duplicates to throw error if true
   getDefaultProps: function() {
      return {
         list: [],
         activeItem: null,
         isOpen: true
      }
   },
   getInitialState: function() {
      return {
         items: this.props.list,
         count: this.props.list.length,
         menu: [],
         isOpen: true
      }
   },
   portal: false,
   componentWillMount: function() {
      console.log("will mount...")
      var _menu = this.mount(this.props);
      this.setState({menu: _menu})
   },

   mount: function(props) {
      console.log("mounting...");
      if(!this.portal){
        return this.build(props);
      } else throw new Error('portal true???')

   },

   build: function(props) {
      var itemStyle = {
         width: 100/this.props.list.length + "%"
      };
      var menuList = this.state.items.map(function(item, index) {
         return (
            <li
               onClick={this.props.onClick}
               className="menu-item"
               id={item}
               style={itemStyle}
               index={index}
               key={item}>
            {item}
            </li>
         );
      }, this);
      console.log("props? ", menuList.props)
      return menuList;
   },

   render: function(){
      return (
         <div
            onClick={this.handleClick}
            className="menu-box-outer">
            <ul className="menu-list">
               {this.state.menu}
            </ul>
         </div>

      )
   },
});


module.exports = Menu;
