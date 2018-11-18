import React, { Component } from 'react';
import './App.css';
// import Inputfield from "./Components/input";
import Questionsqueue from "./Components/queue";
//import Questionsubmit from './Components/questionSubmit';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      questions: [
        {
          text: "Why did the IR originate in Britian?",
          votes: 0
        },
        {
          text: "How come China failed to industrialize in 1800?",
          votes: 0
        },
      ],
      value: "" //passed in message
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.submittingButton = this.submittingButton.bind(this);
  }

  addQuestion = (newQuestion) => {
    let updateQuestions = this.state.questions;
    let x = {
      text: newQuestion,
      votes: 0
    }
    updateQuestions.push(x)
    this.setState({
      questions: updateQuestions
    })
  };

  // addQuestion = () => {
  //   var newQuestion = this.Inputfield(".text_field").value;
  //   this.questions.append((text: newQuestion));
  // }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  submittingButton = () => this.addQuestion(this.state.value)


  handleSubmit(event) {
    event.preventDefault()

    this.submittingButton()
    this.setState({
      value: ""
    })

  }



  bumpQuestion = (i) => {
    let updateQuestions = this.state.questions;
    updateQuestions[i].votes = this.state.questions[i].votes + 1;
    this.setState({
      questions: updateQuestions
    });
  }

  // gettingMessage = (e) => {
  //   let updatePassedInMessage = this.state.passedInMessage;
  //   updatePassedInMessage = document.getElementById("submitingText");
  //   e.preventDefault()
  //   this.setState({
  //     passedInMessage: updatePassedInMessage
  //   })
  // }

  render() {
    return (
      <div className="App font card-panel amber lighten-3">
      <div><h4>Hello!</h4></div>
      <div><h5> Feel free to leave a question, or vote on a question! </h5></div>

        <div>
          <form onSubmit={this.handleSubmit}>
            <div className="container">
              <i class="material-icons prefix">mode_edit</i>
              <textarea className="box" label="Ask a question!" value={this.state.value} onChange={this.handleChange} /> <br />
              <br/>
            </div>
            <button className="btn waves-effect waves-light white black-text" disabled={!this.state.value} type="submit" name="action">Submit<i class="material-icons right">send</i>
            </button>
          </form>
        </div>
        <div><Questionsqueue data={this.state.questions} upvote={this.bumpQuestion} /></div>
      </div>
    );
  }
}

export default App;
//<button onClick={console.log(this.state.passedInMessage)}>ClickMe</button>
{/* <form onSubmit={this.gettingMessage}>
<textarea name="textarea_field" id="submitingText" placeholder="Text enter here"></textarea>
<input type="submit" value="Submit" />
</form> */}

{/* <form onSubmit={this.handleSubmit}>             
                <textarea placeholder= "Text Enter Here" value={this.state.value} onChange={this.handleChange}/>           
            <input type="submit" value="Submit" />
          </form> */}

// <div><Questionsubmit submit={this.addQuestion} theQuestion={this.state.value} /></div>