import React, { useEffect, useState } from 'react';
import './App.css';

import Main from './pages/main/main.jsx';
import Profile from './pages/profile/profile.jsx';
import Messanger from './pages/messanger/messanger.jsx';
import Loading from './pages/loading/loading.jsx';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Authenticate from './pages/authenticate/authenticate';


function App() {
	let [logged, setLogged] = useState('');

	useEffect(() => {
			document.documentElement.style.setProperty('--bodyHeight', `${window.innerHeight}px`)
			console.log('height', document.documentElement.style.getPropertyValue('--bodyHeight'));

			(async () => { 
				let loggedUser = await fetch('http://localhost:5000/api/users/isLoggedIn', {
					method : "POST",
					credentials : 'include'
				}) 

				setLogged(loggedUser);
			})();
	}, []);



	if(logged.status === 200) {
		return (
			<div className="App">
				<Router>
					<Switch>

						<Route path='/' exact>
							<Main />
						</Route>

						<Route path='/profile' exact>
							<Profile />
						</Route>

						<Route path='/messanger' exact>
							<Messanger />
						</Route>

					</Switch>
				</Router>
			</div>
		);
	}

	else if(logged.status === 400) {
		return (
			<div className="App">
				<Authenticate log={x => setLogged(x)} />
			</div>
		)
	}

	else {
		return (
			<div className="App">
				<Loading />
			</div>
		)
	}
}

export default App;
