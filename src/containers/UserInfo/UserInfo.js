import React from 'react'
import classes from './UserInfo.module.css';
import {Button, ImageHolder} from '../../components'
import { ReactComponent as AddFriendIcon } from "../../images/icons/addFriend.svg";
import { ReactComponent as MessageIcon } from "../../images/icons/message.svg";

export const UserInfo = (props) => {
	const {user} = props.user;
	const {name, city, birthday,avatar} = user
	return (
		<div className = {classes.UserInfo}>
			<header className = {classes.Top}>
				<div className = {classes.LeftGroup}>
					<img className = {classes.Avatar}src={avatar} alt=""/>
					<div className = {classes.TopInfo}>
						<span className = {classes.UserName}>{name}</span>
						<span className = {classes.UserSubInfo}>{city}</span>
						<span className = {classes.UserSubInfo}>{birthday}</span>
					</div>
				</div>
				
				<div className = {classes.Buttons}>
					<Button className = {classes.Button}><AddFriendIcon/></Button>
					<Button className = {classes.Button}><MessageIcon/></Button>
				</div>
			</header>

			<main className = {classes.Main}>
				<h1 className = {classes.TitleTopFive}>top-5 music : mode </h1>
				<div className = {classes.TopFive}>
					<ImageHolder src = {avatar}/>
					<ImageHolder src={avatar} alt=""/>
					<ImageHolder src={avatar} alt=""/>
					<ImageHolder src={avatar} alt=""/>
					<ImageHolder src={avatar} alt=""/>
					<ImageHolder src={avatar} alt=""/>
				</div>
			</main>
			<nav className = {classes.Navigation}></nav>
		</div>
	)
}
