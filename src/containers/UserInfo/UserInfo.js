import React from 'react'
import classes from './UserInfo.module.css';
import { Button } from '../../components/Button/Button';

export const UserInfo = () => {
	return (
		<div className = {classes.UserInfo}>
			<header className = {classes.Top}>
				<img className = {classes.Avatar}src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQceBV9lla57T_I9ajBeJ5P9gJ6nNe1D1M4RQ&usqp=CAU" alt=""/>
				<div className = {classes.TopInfo}>
					<span className = {classes.UserName}>User Name</span>
					<span className = {classes.UserSubInfo}>Place</span>
					<span className = {classes.UserSubInfo}>Date</span>
				</div>
				<div>
					<Button variant = 'icon'>f</Button>
					<Button variant = 'icon'>m</Button>
				</div>
			</header>

			<main className = {classes.Main}></main>
			<nav className = {classes.Navigation}></nav>
		</div>
	)
}
