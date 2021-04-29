import React from "react";
import classes from "./Button.module.css";

export const Button = ({support, onClick, children,className}) => {
	const supportImg = support ? <img src={support} alt="" /> : null;
	const clx = [classes.Button];
	if (className) clx.push(className);


	return (
		<button onClick={onClick} className={clx.join(' ')}>
			{children}
			{supportImg}
		</button>
);
};
