var React = require("react");
var ReactDOM = require("react-dom");

var Parallax = React.createClass({

   render: function(){
      return(
         <div className="main">
            <div className="parallax">
               <div id="group1" className="parallax__group">
                  <div className="parallax__layer parallax__layer--deep">
                     <h1 className="title">Deep Layer</h1>
                  </div>
                  <div className="parallax__layer parallax__layer--base">
                     <h1 className="title">Base Layer</h1>
                  </div>
               </div>
               <div id="group2" className="parallax__group">
                  <div className="parallax__layer parallax__layer--deep">
                     <h1 className="title">Deep Layer</h1>
                  </div>
               </div>
               <div id="group3" className="parallax__group">
                  <div className="parallax__layer parallax__layer--deep">
                     <h1 className="title">Deep Layer</h1>
                  </div>
               </div>
            </div>
         </div>
      )
   }
})

module.exports = Parallax;


// <div className="parallax__layer parallax__layer--base">
//    <h1 className="title">Base Layer</h1>
// </div>
// <div className="parallax__layer parallax__layer--back">
//    <h1 className="title">Back Layer</h1>
// </div>
