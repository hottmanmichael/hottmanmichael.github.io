var React = require("react");
var ReactDOM = require("react-dom");
var cx = require("classnames");

var ResumeBuilder = React.createClass({

   getInitialState: function() {
      return {
         expanded:false
      }
   },

   expandCard: function(field, e) {
      e.preventDefault();
      console.log("something is being clicked...")
      this.setState({
         expanded: !this.state.expanded
      })
   },

   render: function(){
      var isOpen = cx({
         'open': this.state.expanded
      });
      return(
         <div className="resume-builder">
            <div className={"card "}>

            </div>
            <div className={"card " + isOpen} onClick={this.expandCard.bind(this, 'special')}>
               <h1 className="card-inner"> Stuff In Here </h1>
            </div>
            <div className="card">
               <h1 className="card-inner"> Stuff In Here </h1>
            </div>
            <div className="card">
               <h1 className="card-inner"> Stuff In Here </h1>
            </div>
            <div className="card">
               <h1 className="card-inner"> Stuff In Here </h1>
            </div>
            <div className="card">
               <h1 className="card-inner"> Stuff In Here </h1>
            </div>
         </div>
      )
   }
})

module.exports = ResumeBuilder;
