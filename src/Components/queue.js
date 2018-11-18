import React, {Component} from 'react';
class Questionsqueue extends Component {

    listItems = () => {
      let items = this.props.data.map((questionsData, i)=>{
        
        let element = <li key={i}>
          <p>{questionsData.text}</p>
          <p>VOTES:  {questionsData.votes}</p>
          <button className= "btn waves-effect waves-light yellow lighten-3 black-text" onClick={ ()=>this.props.upvote(i) }><i className="large material-icons">thumb_up</i></button>
        </li>;
        return element;
        
      });
      return(items);
    }

    render () {
        return (
          <ul>
            <div stlye= "font-family: 'Patrick Hand', cursive;">
            {this.listItems()}
            </div>

          </ul>
        );
    }
}
export default Questionsqueue;