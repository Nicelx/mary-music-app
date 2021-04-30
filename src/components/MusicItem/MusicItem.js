import React from 'react'
import classes from './MusicItem.module.css'

import { ImageHolder } from '../';

export const MusicItem = ({src, title, numOrder}) => {
	return (
		<div className = {classes.MusicItem}>
			<ImageHolder src = {src}/>
			<span className = {classes.Title}>{numOrder}. {title}</span>
		</div>
	)
}
