import { useState } from "react";
import { Greeting } from "./containers/Greeting/Greeting";
import { UserInfo } from './containers/UserInfo/UserInfo';
import { Login, SignUp } from './containers/Auth/auth';


import {user} from './store/user';
import classes from "./App.module.css";
import {
	BrowserRouter as Router,
	Switch,
	Route,
  } from "react-router-dom";

function App() {
	const [token, setToken] = useState(null);
	const [userId, setUserId] = useState(''); 

	return (
		<>
			<Router>
			<div className={classes.Container}>
			<Switch>
				<Route path="/" exact>
					<Greeting />
				</Route>
				<Route path="/login"  exact>
					<Login/>
				</Route>
				<Route path="/signup" exact>
					<SignUp />
				</Route>
				<Route path="/greeting">
					<Greeting />
				</Route>
				<Route path="/user">
					<UserInfo user = {user} userId = {userId}/>
				</Route>
				</Switch>
			</div>
			</Router>
			
		</>
	);
}

export default App;
