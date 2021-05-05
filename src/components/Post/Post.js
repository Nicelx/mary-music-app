import React from 'react'
import classes from './Post.module.css';

export const Post = ({user, message}) => {
	const {avatar, name} = user
	const {date, text, music, likes} = message

	return (
		<div className = {classes.Post}>
			<div className = {classes.Avatar}>avatar</div>
			<div className = {classes.PostInfo}>
				<div className = {classes.Title}>

				</div>

				<div className = {classes.Body}>

				</div>
				
				<div className = {classes.Reply}></div>

			</div>
		</div>
	)
}
