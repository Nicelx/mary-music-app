import React from 'react'
import classes from './Navigation.module.css';
import {Link} from 'react-router-dom';
import {ReactComponent as NoteIcon} from '../../images/icons/note.svg'
import {ReactComponent as FriendsIcon} from '../../images/icons/friends.svg'
import {ReactComponent as HomeIcon} from '../../images/icons/home.svg'
import {ReactComponent as MenuIcon} from '../../images/icons/menu.svg'
import {ReactComponent as MessageIcon} from '../../images/icons/message.svg'

export const Navigation = () => {
	return (
		<nav className={classes.Navigation}>
			<Link to=""><NoteIcon/></Link>
			<Link to=""><FriendsIcon/></Link>
			<Link to=""><HomeIcon/></Link>
			<Link to=""><MessageIcon className = {classes.GrayColor}/></Link>
			<Link to=""><MenuIcon/></Link>
		</nav>
	)
}
