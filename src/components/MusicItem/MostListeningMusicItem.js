import React from 'react'
import {ImageHolder,Button} from '../'
import {ReactComponent as HeartIcon} from '../../images/icons/heart.svg'
import {ReactComponent as AddIcon} from '../../images/icons/plus.svg'
import {ReactComponent as SettingIcon} from '../../images/icons/settingDots.svg'
import classes from './MusicItem.module.css'

export const MostListeningMusicItem = ({src, title, album}) => {
	return (
		<div className = {classes.MostListening}>
			<ImageHolder src = {src}/>
			<div className = {classes.MusicInfo}>
				<h3 className = {classes.MostListeningTitle}>{title}</h3>
				<p className = {classes.Album}>{album}</p>
				<p className = {classes.ListeningAmount} >Listening xxx</p>
				<div className = {classes.Reaction}>
					<Button className = {classes.LikeButton}><HeartIcon/></Button>
					<Button className = {classes.AddButton}><AddIcon/></Button>
				</div>
				<Button className = {classes.SettingButton}><SettingIcon/></Button>
			</div>
		</div>
	)
}
