import React from "react";
import classes from "./Button.module.css";

export const Button = ({variant, support, onClick, children}) => {
	
	const supportImg = support ? <img src={support} alt="" /> : null;
	const clx = [classes.Button];
	if (variant === 'icon') clx.push(classes.ButtonIcon)


	return (
		<button onClick={onClick} className={clx.join(' ')}>
			{children}
			{supportImg}
		</button>
);
};
