import React, { useState } from "react";
import classes from "./SignUp.module.css";

import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import { useHistory } from "react-router-dom";

export const SignUp = () => {
	const [name, setName] = useState("");
	const [password, setPassword] = useState("");

	const history = useHistory();

	const onSignUpHandler = async () => {
		const response = await fetch("http://localhost:8080/auth/signup", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				login: name,
				password: password,
			}),
		});
		const data = await response.json();
	};

	return (
		<div className={classes.SignUp}>
			<h1 className={classes.Welcome}>Welcome</h1>
			<div className={classes.SignUpForm}>
				<Input className={classes.Input} placeholder="Name" />
				<Input className={classes.Input} placeholder="Password" />
				<Button className={classes.Button} onClick={onSignUpHandler}>
					Sign Up
				</Button>
			</div>
		</div>
	);
};
