import React from 'react';

export class Home extends React.Component{
  constructor(props){
    super();
    this.state = {
      age: props.initialAge,
      status: 0,
      homeLink: props.homeLink
    };
  }

  onMakeOlder(){
    this.setState({
      age: this.state.age + 3
    })
  }

  onChangeLink() {
    this.props.changeLink(this.state.homeLink);
  }

  onHanlderChange(event){
    this.setState({
      homeLink: event.target.value
    })
  }

  render(){
    return (
      <div>
        <p> Um novo componente! </p>
        <p> Your name is {this.props.name}, your age is {this.state.age}</p>
        <p> Status{ this.state.status}</p>
        <hr/>
        <button onClick={() => this.onMakeOlder()} className="btn btn-primary">Make me older!</button>
        <hr/>
        <button onClick={this.props.greet} className="btn btn-primary">alert</button>
        <hr/>
        <input type="text" value={this.state.homeLink} onChange={(event) => this.onHanlderChange(event)}/>
        <button onClick={this.onChangeLink.bind(this)} className="btn btn-primary"> Change Link</button>
      </div>
    );
  }
}

Home.propTypes = {
  name: React.PropTypes.string,
  initialAge: React.PropTypes.number,
  greet: React.PropTypes.func,
  initialLinkName: React.PropTypes.string
};