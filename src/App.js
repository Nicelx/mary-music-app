import { Greeting } from "./containers/Greeting/Greeting";
import { UserInfo } from './containers/UserInfo/UserInfo';
import {user} from './store/user';
import classes from "./App.module.css";
import {
	BrowserRouter as Router,
	Switch,
	Route,
  } from "react-router-dom";

function App() {
	return (
		<>
			<Router>
			<div className={classes.Container}>
			<Switch>
				<Route path="/" exact>
					<Greeting />
				</Route>
				<Route path="/greeting">
					<Greeting />
				</Route>
				<Route path="/user">
					<UserInfo user = {user}/>
				</Route>
				</Switch>
			</div>
			</Router>
			
		</>
	);
}

export default App;
