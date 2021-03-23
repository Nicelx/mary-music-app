import classes from "./GuideItem.module.css";
import React from "react";

export const GuideItem = (props) => {
	return (
		<div className={classes.GuideItem}>
			<img className={classes.GuideImage} src={props.src} alt="" />

			<div className = {classes.GuideTextWrapper}>
				<span className={classes.GuideText}>{props.children}</span>
			</div>
		</div>
	);
};
