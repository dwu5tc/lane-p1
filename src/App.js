import React, { Component } from 'react';
import ImagePanel from './components/ImagePanel';
import ActionsContainer from './containers/ActionsContainer';

class App extends Component {
	constructor() {
		super();

		this.state = {
			rotateOn: false,
			translateOn: false,
			opacityOn: false,
			scaleOn: false
		};
	}

	uploadImage(e) {
		e.preventDefault();
		
	}

	toggleAction = (action) => {
		this.setState((prevState) => {
			[action]: !prevState[action] 
		});
	}

	// toggleRotate = () => {
	// 	this.setState((prevState) => {
	// 		rotateOn: !prevState.rotateOn
	// 	});
	// }

	// toggleTranslate = () => {
	// 	this.setState((prevState) => {
	// 		rotateOn: !prevState.translateOn
	// 	});
	// }

	// toggleOpacity = () => {
	// 	this.setState((prevState) => {
	// 		rotateOn: !prevState.opacityOn
	// 	});
	// }

	// toggleScale = () => {
	// 	this.setState((prevState) => {
	// 		rotateOn: !prevState.scaleOn
	// 	});
	// }

	render() {
		return (
			<div className=''>
				<ImagePanel />
				<ActionsContainer 
					handleRotate={this.toggleRotate}
					handleTranslate={this.toggleTranslate}
					handleOpacity={this.toggleOpacity}
					handleScale={this.toggleScale}
				/>
			<div>
		);
	}
}

export default App;