import React from 'react';
import { render } from 'react-dom';
import Form from './form';

class App extends React.Component {
	render() {
		return <Form/>
	}
}

render(<App/>, document.querySelector('#app'));

