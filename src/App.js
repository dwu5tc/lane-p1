import React, { Component } from 'react';

class App extends Component {
	constructor() {
		super();

		this.state = {
			hello: 'world'
		};
	}

	render() {
		return (
			<h1>Jello {this.state.hello}!!</h1>
		);
	}
}

export default App;