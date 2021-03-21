import React from "react";
import classes from "./Greeting.module.css";

export const Greeting = () => {
	return (
		<div className={classes.Greeting}>
			<div className={classes.Container}>
				<div className = {classes.ShowcaseContainer}>
					<p className={classes.ShowcaseText}>music app</p>
					<p className={classes.ShowcaseText}>for beloved Mary</p>
					<p className={classes.ShowcaseText}>who want to find</p>
					<p className={classes.ShowcaseText}>her happy</p>
				</div>
				<div className = {classes.Title}>
					<p className = {classes.TitleUp}>music</p>
					<p className = {classes.TitleDown}>Mary</p>
				</div>
			</div>
		</div>
	);
};
