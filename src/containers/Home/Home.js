import React from 'react'
import classes from './Home.module.css';

export const Home = () => {
	return (
		<div className = {classes.Home}>
			<header className = {classes.Top}>
				<img className = {classes.Avatar}src="" alt=""/>
				<div className = {classes.TopInfo}>
					<span className = {classes.UserName}>User Name</span>
					<span className = {classes.Place}>Place</span>
					<span className = {classes.Date}>Date</span>
				</div>
				<div>
					<button>add friend</button>
					<button>chat</button>
				</div>
			</header>

			<main className = {classes.Main}></main>
			<nav className = {classes.Navigation}></nav>
		</div>
	)
}
