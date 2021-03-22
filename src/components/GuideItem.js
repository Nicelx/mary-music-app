import classes from './GuideItem.module.css';
import React from 'react';

export const GuideItem = props => {
	return (
		<div className = {classes.GuideItem}>
			<img src={props.src} alt=""/>
			<span className = {classes.GuideText}>{props.text}</span>
		</div>
	);
};
