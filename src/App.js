import React, { useEffect, useState } from 'react';
import './App.css';

import Main from './pages/main/main.jsx';
import Profile from './pages/profile/profile.jsx';
import Messanger from './pages/messanger/messanger.jsx';
import Loading from './pages/loading/loading.jsx';
import Header from './components/header/header.jsx';
import Authenticate from './pages/authenticate/authenticate';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { addUser } from './redux/actions'
import { useDispatch } from 'react-redux' 

import { auth } from './firebase/auth' 
import db from './firebase/firestore' 


function App() {
	const dispatch = useDispatch();
	let [logged, setLogged] = useState(null);

	auth.onAuthStateChanged(user => {
		if(!user) {
			setLogged(false);
			return false;
		}

		// let response = await db.collection('users').where('uid', '==', user.uid).get();

		db.collection('users').doc(`${user.uid}`).get().then(response => {
			let userData = response.data();
			let id = response.id;

			dispatch(addUser({ id, ...userData }))

			setLogged(true);
		})

		// let response = await db.collection('users').doc(`${user.uid}`).get();

		// let userData = response.data();
		// let id = response.id;

		// dispatch(addUser({ id, ...userData }))

		// setLogged(true);
	})
	
	useEffect(() => {
		document.documentElement.style.setProperty('--bodyHeight', `${window.innerHeight}px`);
	}, []);


	if(logged === null) {
		return (
			<div className='App'>
				<Loading />
			</div>
		)
	}


	if(logged) {
		return (
			<Router>
				<Switch>
					<Route exact path='/messanger/:userID'>
						<div className='messangerApp'>	
							<Header />
							<Messanger />	
						</div>
					</Route>


					<div className='App'>
						<Header />
						
						<Route path='/' exact>
							<Main />
						</Route>

						<Route path='/:profileUID' exact>
							<Profile />
						</Route>
					</div>
				</Switch>
			</Router>
		);
	}

	else if(!logged) {
		return (
			<div className="App">
				<Authenticate log={x => setLogged(x)} />
			</div>
		)
	}

	// else {
	// 	return (
	// 		<div className="App">
	// 			<Loading />
	// 		</div>
	// 	)
	// }
}

export default App;
