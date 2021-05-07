import React from 'react'
import classes from './Post.module.css';
import { Input,Button } from '../';


export const Post = ({user, message}) => {
	const {avatar, name} = user
	const {date, text, music, likes} = message

	return (
		<div className = {classes.Post}>
			<div>
				<img className = {classes.AvatarImage} src = {avatar}/>
			</div>
			<div className = {classes.PostInfo}>
				<div className = {classes.Title}>
					<span className = {classes.Name}>{name}</span>
					<span className = {classes.Date}>1 mya</span>
				</div>

				<div className = {classes.Body}>
					<div className = {classes.TextBox}>
						<span className = {classes.Text}>{text}</span>
					</div>

					<div className = {classes.MusicAttachment}> music attachment</div>
					<div className = {classes.Answers}>see answers</div>
				</div>
				
				<div className = {classes.Reply}>
					<Input className = {classes.Input} placholder = 'send the answer...' type="text" />
					<div className = {classes.Likes}>
						<span className = {classes.LikesCount}></span>
						<Button className = {classes.LikeButton}></Button>
					</div>
				</div>

			</div>
		</div>
	)
}
