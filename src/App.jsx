import React from 'react';
import './App.css';
import Modals from './Modals/Modals';
import { fields } from './fieldsModal';

class App extends React.Component {
	render() {
		let modalList = fields.map((item, index) => (
			<Modals key={index}  headerContent={item.headerContent} bodyText={item.bodyText} bottomText={item.bottomText} textBtn={item.textBtn} isExit={item.isExit} class={item.class}/>
		));
		return <div>{modalList}</div>;
	}
}

export default App;
