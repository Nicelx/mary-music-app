import React, { useState } from "react";
import classes from "./Greeting.module.css";
import { GuideItem } from './../components/GuideItem/GuideItem';
import * as images from '../images';
import {guide1, guide2, guide3} from '../images'
import { Button } from './../components/Button/Button';

const greetingData = [
	{
		title: 'add your favorite music',
		src : guide1
	},
	{
		title: 'find friends, who likes the same music',
		src : guide2
	},
	{
		title: 'chat with them',
		src : guide3
	}
]

export const Greeting = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	
	const moveGuideItemHandler = () => {
		setActiveIndex(prev => {
			if (prev < 2) return prev+1;
			else return 0	
		})
	}

	const greetItem = Greet

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
					{/* <GuideItem active = {true} src = {guide1}>add your favorite music</GuideItem>
					<GuideItem src = {guide2}> </GuideItem>
					<GuideItem src = {guide3}></GuideItem> */}
				</div>

				<Button onClick = {moveGuideItemHandler}>start</Button>
			</div>
		</div>
	);
};
