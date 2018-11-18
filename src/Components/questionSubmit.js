import React, { Component } from 'react';
class Questionsubmit extends Component {

  // questionSubmit = () => {

  //   //<input id="clickMe" type="button" value="clickme" onClick={  ()=>this.props.submit("work")} />

  // }
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     passedInMessage: ""
  //   };

  //   gettingMessage = () => {
  //     let updatePassedInMessage = this.state.passedInMessage;
  //     updatePassedInMessage = document.getElementById("submitingText");
  //     this.setState({
  //       passedInMessage: updatePassedInMessage
  //     })
  //   }
  // }
  render() {
    return (
      <div>
        <button onClick={() => this.props.submit(this.props.theQuestion)}>Submit Question</button>
      </div>
    );
  }
}
export default Questionsubmit;

