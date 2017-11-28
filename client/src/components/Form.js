import React, { Component } from 'react';

class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: "",
		};
	}

	render() {
		return (
      <form onSubmit={this.handleSubmit.bind(this)} className="new-blurb-form">
        <h1>New Document</h1>
        <div className="new-blurb-input-area">
          <textarea
            className='f-input-2'
            onChange={this.handleText.bind(this)}
            value={this.state.text}
            placeholder="Document Body...">
          </textarea>
        </div>
        <div className="form-submit-2"
             onClick={this.handleSubmit.bind(this)}>
          <input
            type="submit"
            value="Analyze!"/>
        </div>
				
				<span>{this.props.dataResults}</span>
      </form>
		);
	}

	handleText(event) {
		this.setState({
			text: event.target.value
		});
	}

	handleSubmit(event) {
		event.preventDefault();
		this.props.onSubmit({
			text: this.state.text
		});
	}

}


export default Form;
