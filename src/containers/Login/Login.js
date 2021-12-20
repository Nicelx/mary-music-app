import React, { useState } from "react";
import classes from "./Login.module.css";

import { Button } from "../../components/Button/Button";
import {  Input } from "../../components/Input/Input";
import {useHistory} from 'react-router-dom'

export const Login = () => {
	const history = useHistory();

	const onClickHandler =async () => {
		const response = await fetch('http://localhost:8080/auth/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body : JSON.stringify({
				login: 'somelogin',
				password: 'somepassword',
			})
		})
		const data =await response.json();
		console.log(data);
	}

	return (
		<div >
			<div >
				<Input />
				<Button onClick={onClickHandler}>Login</Button>
			</div>
		</div>
	);
};
