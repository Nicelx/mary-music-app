import React from 'react'
import classes from './Post.module.css';
import { Input,ButtonIcon,Song } from '../';
import { ReactComponent as LikeIcon } from "../../images/icons/heart.svg";


export const Post = ({user, message}) => {
	const {avatar, name} = user
	const {date, text, music, likes} = message

	const dummySong = {
		title : 'title',
		length: 'x:xx'

	}

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

					<div className = {classes.MusicAttachment}>
						<Song song = {dummySong}/>
						<Song song = {dummySong}/>
						<Song song = {dummySong}/>
						 music attachment
					</div>
					<div className = {classes.Answers}>
						<span className = {classes.AnswersText}>see answers</span> 
					</div>
				</div>
				
				<div className = {classes.Reply}>
					<Input className = {classes.Input} placholder = 'send the answer...' type="text" />
					<div className = {classes.Likes}>
						<span className = {classes.LikesCount}>5</span>
						<ButtonIcon><LikeIcon/></ButtonIcon>
					</div>
				</div>

			</div>
		</div>
	)
}
