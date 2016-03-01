var React = require("react");
var ReactDOM = require("react-dom");

var Modal = require('./global/modal_window.jsx');
var ResumeBuilder = require('./global/resume_builder.jsx');

var Home = React.createClass({

   render: function(){
      return(
         <div className="main">
            <div className="layer-group">
               <div className="layer-base top">
                  <div className='title-box-name'>
                     <h1 className="title">Michael Hottman</h1>
                  </div>
               </div>
               <div className="layer-upper">
                  <Modal type="button" open={false}>
                     <h1>Let's give it some children!</h1>
                  </Modal>
               </div>
               <div className="layer-base resume">
                  <div className='layer-base-inner'>
                     <div className="layer-base-title">
                        <h1>Resume</h1>
                     </div>   
                     <ResumeBuilder />
                  </div>

               </div>
               <div className="layer-upper"></div>
               <div className="layer-base bottom"></div>
            </div>
         </div>
      )
   }
})

module.exports = Home;
