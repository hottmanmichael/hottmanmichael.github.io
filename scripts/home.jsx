var React = require("react");
var ReactDOM = require("react-dom");

var Modal = require('./global/modal_window.jsx');
var ResumeBuilder = require('./global/resume_builder.jsx');

var Home = React.createClass({

   translate: {
      german: 'Deutschsprachiger', //default
      english: 'German Speaker'
   },

   getInitialState: function() {
      return {
         subtitle: this.translate.german,
         transCount: 0,
         countLimit: 20
      }
   },

   componentDidMount: function() {
      setTimeout(this.handleTranslate, 9000)
   },

   //recursively switches between german & english
   //slotmachine-like effect, slowing down
   handleTranslate: function() {
      if (this.state.transCount < this.state.countLimit) {
         (this.state.subtitle == this.translate.english) ? this.setState({subtitle: this.translate.german}) : this.setState({subtitle: this.translate.english})
         this.setState({transCount: this.state.transCount+1});
         setTimeout(this.handleTranslate, 9000);
      }
   },

   /* TODO: Create a function to translate the entire page... Do from app.jsx */

   render: function() {
      return(
         <div className="main" onScroll={this.handleScroll}>
            <div className="layer-group">
               <div className="layer-base top">
                  <div className='title-box-name'>
                     <p className="title font-page-header">Michael Hottman</p>
                     <div className="subtitle-box">
                        <p className="font-center font-small">Web Developer & {this.state.subtitle}</p>
                     </div>
                  </div>
               </div>
               <div className="layer-upper">
                  <Modal className="open-modal-button" type="button" open={false} label="Open Modal">
                     <h3 className="font-small font-center">|___|__ ... __|___|</h3>
                  </Modal>
               </div>
               <div id="resume" className="layer-base resume">
                  <div className='layer-base-inner'>
                     <div className="layer-base-title">
                        <h1 className="font-large font-center">Resume</h1>
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
