import React, { useState } from "react";
import classes from "./SignUp.module.css";

import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import { useHistory } from "react-router-dom";

export const SignUp = () => {
	const [login, setLogin] = useState("");
	const [name, setName] = useState("");
	const [password, setPassword] = useState("");

	const history = useHistory();

	const onSignUpHandler = async () => {
		const bodyToSend = JSON.stringify({
			login,
			name,
			password,
		})

		try {
			const response = await fetch("http://localhost:8080/auth/signup", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: bodyToSend,
		});
		if (response.status === 201) {
			history.push('./user')
		}
		const data = await response.json();
		console.log('data', data)
		}
		catch(e) {
			console.log(e);
			history.push('/signup');
		}
	};

	const onNameChangeHandler = (e) => {
		setName(e.target.value);
	}

	const onPasswordHandler = e => {
		setPassword(e.target.value);
	}
	const onLoginHandler = e => {
		setLogin(e.target.value);
	}

	return (
		<div className={classes.SignUp}>
			<h1 className={classes.Welcome}>Welcome</h1>
			<div className={classes.SignUpForm}>
				<Input className={classes.Input} placeholder="Login" onChange ={onLoginHandler} />
				<Input className={classes.Input} placeholder="Name" onChange ={onNameChangeHandler} />
				<Input className={classes.Input} placeholder="Password" onChange ={onPasswordHandler}/>
				<Button className={classes.Button} onClick={onSignUpHandler}>
					Sign Up
				</Button>
			</div>
		</div>
	);
};
