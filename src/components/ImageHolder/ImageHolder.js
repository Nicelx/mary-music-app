import React from 'react'
import classes from './ImageHolder.module.css';

export const ImageHolder = ({src, alt, className}) => {
	const clx = [classes.ImageHolder];
	if (className) clx.push(className) 

	return (
		<div className = {clx.join(' ')}>
			<img className = {classes.Image}src={src} alt={alt}/>
			<button className = {classes.PlayButton}></button>
		</div>
	)
}
