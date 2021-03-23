import React from "react";
import classes from "./Greeting.module.css";
import { GuideItem } from './../components/GuideItem';
import * as images from '../images';
import {guide1, guide2, guide3} from '../images'

export const Greeting = () => {
	console.log(images);
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

				<div className = {classes.Guide}>
					<GuideItem src = {guide1}>add your favorite music</GuideItem>
					<GuideItem src = {guide2}>find friends, who likes the same music </GuideItem>
					<GuideItem src = {guide3}>chat with them</GuideItem>
				</div>
			</div>
		</div>
	);
};
