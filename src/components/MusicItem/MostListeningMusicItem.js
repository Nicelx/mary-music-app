import React from 'react'
import {ImageHolder} from '../'
import classes from './MusicItem.module.css'
import { Button } from '../';

export const MostListeningMusicItem = ({src, title, album}) => {
	return (
		<div className = {classes.MostListening}>
			<ImageHolder src = {src}/>
			<div className = {classes.MusicInfo}>
				<h3 className = {classes.MostListeningTitle}>{title}</h3>
				<p className = {classes.Album}>{album}</p>
				<p className = {classes.ListeningAmount} >Listening xxx</p>
				<div className = {classes.Reaction}>
					<Button className = {classes.LikeButton}>like</Button>
					<Button className = {classes.AddButton}>add</Button>
				</div>
			</div>
			<div className = {classes.Settings}>

			</div>
		</div>
	)
}
