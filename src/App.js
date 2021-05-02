import { Greeting } from "./containers/Greeting/Greeting";
import { UserInfo } from './containers/UserInfo/UserInfo';
import {user} from './store/user';
import classes from "./App.module.css";

function App() {
	return (
		<>
			<div className={classes.Container}>
				{/* <Greeting/> */}
				<UserInfo user = {user}/>
			</div>
		</>
	);
}

export default App;
