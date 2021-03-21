import { Greeting } from "./containers/Greeting";
import classes from "./App.module.css";

function App() {
	return (
		<>
			<div className={classes.Container}>
				<Greeting/>
			</div>
		</>
	);
}

export default App;
