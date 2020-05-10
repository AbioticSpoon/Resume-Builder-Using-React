import React from 'react';
// import './App.css';
import Nav from './components/Nav/Nav';
import Homepage from './components/Home/Homepage';
import Form from './components/ResumeForm/Form';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
	return (
		<div>
			<Nav />
			<Switch>
				<Route path="/" exact component={Homepage} />
				<Route path="/create" exact component={Form} />
			</Switch>
		</div>
	);
}

export default App;
