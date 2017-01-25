import React from 'react';
class Gorilla extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'highlighted': false
    };
  }
  componentDidMount() {
    this.refs.test_target.addEventListener('drop', (ev) => {this.handleDrop(ev)}, false);
    this.refs.test_target.addEventListener('dragEnter', (ev) => {this.setState({'highlighted': true})}, false);
    this.refs.test_target.addEventListener('dragLeave', (ev) => {this.setState({'highlighted': false})}, false);
  }

  getData(event){
    return JSON.parse(event.dataTransfer.getData('food_data'));
  }

  handleDrop(ev){
    var data = this.getData(ev);
    if (data) {
			if (data.tastes != 'bad') {
				if (data.domId) {
					document.getElementById(data.domId).style.visibility = 'hidden';
				}
				alert('Thanks for the ' + data.label + '! It is ' + data.tastes + '!');
			} else {
				alert('Yech! ' + data.label + ' are ' + data.tastes + '!');
			}
    }
		this.setState({'highlighted': false});
  }

  render() {
    var styles = {
      'position': 'absolute',
      'top': 30,
      'left': 500,
      'padding': 10,
      'backgroundColor': (this.state.highlighted ? 'aqua' : 'transparent'),
      'textAlign': 'center'
    };
    return (
      <div style={styles} ref="test_target">
        <img src="https://s28.postimg.org/5c28kbqex/gorilla.png" width="100"/>
      </div>
    );
  }
}
export default Gorilla;