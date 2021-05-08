import React from "react";
import classes from "./Button.module.css";


export const ButtonIcon = ({onClick, children, className}) => {
	const clx =[classes.ButtonIcon];
	if (className) clx.push(className);


	return (
		<button onClick={onClick} className={clx.join(' ')}>
			{children}
		</button>
);
};
