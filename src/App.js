import { Greeting } from "./containers/Greeting/Greeting";
import { UserInfo } from './containers/UserInfo/UserInfo';
import classes from "./App.module.css";
import {user} from './store/user';

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
