import React from "react";
import classes from "./Button.module.css";

export const Button = (props) => {
	const support = props.support ? <img src={props.support} alt="" /> : null;

	return (
		<button onClick={props.onClick} className={classes.Button}>
			{props.children}
			{support}
		</button>
);
};
