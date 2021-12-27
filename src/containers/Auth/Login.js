import React, { useState } from "react";
import classes from "./Auth.module.css";

import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import { useHistory } from "react-router-dom";

export const Login = () => {
	const [login, setLogin] = useState("");
	const [password, setPassword] = useState("");

	const history = useHistory();

	const onLoginSubmitHandler = async () => {
		const bodyToSend = JSON.stringify({
			login,
			password,
		})

		try {
			const response = await fetch("http://localhost:8080/auth/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: bodyToSend,
		});
		// if (response.status === 201) {
		// }
		const data = await response.json();

		console.log(data)
		localStorage.setItem('token', data.token );
		localStorage.setItem('expiryDate', Date.now() + 3600000);
		console.log(Date.now());
		history.push('/user');
		
		}
		catch(e) {
			console.log(e);
			history.push('/login');
		}
	};

	const onPasswordHandler = e => {
		setPassword(e.target.value);
	}
	const onLoginHandler = e => {
		setLogin(e.target.value);
	}

	return (
		<div className={classes.Auth}>
			<h1 className={classes.Welcome}>Welcome</h1>
			<div className={classes.AuthForm}>
				<Input className={classes.Input} placeholder="Login" onChange ={onLoginHandler} />
				<Input className={classes.Input} placeholder="Password" onChange ={onPasswordHandler}/>
				<Button className={classes.Button} onClick={onLoginSubmitHandler}>
					Login
				</Button>
			</div>
		</div>
	);
};
