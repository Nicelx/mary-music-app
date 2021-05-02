import React from 'react'
import classes from './MusicItem.module.css'

import { ImageHolder } from '..';

export const TopFiveMusicItem = ({src, title, numOrder}) => {
	return (
		<div className = {classes.TopFiveMusicItem}>
			<ImageHolder src = {src}/>
			<span className = {classes.Title}>{numOrder}. {title}</span>
		</div>
	)
}
