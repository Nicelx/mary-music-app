import classes from "./GuideItem.module.css";
import React from "react";

export const GuideItem = (props) => {
	const classList = [classes.GuideItem]
	if (props.active) {
		classList.push(classes.GuideItemActive);
	}


	return (
		<div className={classList.join(' ')}>
			<img className={classes.GuideImage} src={props.src} alt="" />

			<div className = {classes.GuideTextWrapper}>
				<span className={classes.GuideText}>{props.children}</span>
			</div>
		</div>
	);
};
