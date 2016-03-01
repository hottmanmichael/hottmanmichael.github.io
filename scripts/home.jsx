var React = require("react");
var ReactDOM = require("react-dom");
var $ = require("jquery");

var Modal = require('./global/modal_window.jsx');
var ResumeBuilder = require('./global/resume_builder.jsx');

var Home = React.createClass({

   render: function(){
      return(
         <div className="main">
            <div className="layer-group">
               <div className="layer-base top">
                  <div className='title-box-name'>
                     <h1 className="title font-large">Michael Hottman</h1>
                  </div>
               </div>
               <div className="layer-upper">
                  <Modal className="open-modal-button" type="button" open={false} label="Open Modal">
                     <h1 className="font-large">This is an open modal..</h1>
                     <h3  className="font-small">Not really sure what I'm going to do with it yet, but we'll see... Lots and lots of single line text will go here and it would be really cool if I could scroll left and right on this modal...</h3>
                  </Modal>
               </div>
               <div id="resume" className="layer-base resume">
                  <div className='layer-base-inner'>
                     <div className="layer-base-title">
                        <h1 className="font-large">Resume</h1>
                     </div>
                     <Modal className="open-modal-button resume-item" open={false} label="Item 1">
                        <h1 className="font-large">This is open modal 1..</h1>
                     </Modal>
                     <Modal className="open-modal-button resume-item" open={false} label="Item 2">
                        <h1 className="font-large">This is open modal 2..</h1>
                     </Modal>

                     <Modal className="open-modal-button resume-item" open={false} label="Item 3">
                        <h1 className="font-large">This is open modal 3..</h1>
                     </Modal>
                     <Modal className="open-modal-button resume-item" open={false} label="Item 4">
                        <h1 className="font-large">This is open modal 4..</h1>
                     </Modal>
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
