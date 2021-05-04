import React, { useRef } from "react";
import { Button, MostListeningMusicItem, TopFiveMusicItem } from "../../components";
import { Navigation } from './../Navigation/Navigation';

import { ReactComponent as AddFriendIcon } from "../../images/icons/addFriend.svg";
import { ReactComponent as MessageIcon } from "../../images/icons/message.svg";

import { debounce } from "./../../utils/utils";
import classes from "./UserInfo.module.css";

export const UserInfo = (props) => {
	const { user } = props.user;
	const { name, city, birthday, avatar } = user;

	const carouselRef = useRef();

	const dragStart = (e) => {
		carouselRef.current.onmousemove = (e) => debounce(() => dragMove(e));
	};

	const dragMove = (e) => {
		carouselRef.current.scrollLeft -= e.movementX * 2.5;
	};

	const dragEnd = (e) => {
		carouselRef.current.onmousemove = null;
	};
	console.log("render");

	return (
		<div className={classes.UserInfo}>
			<header className={classes.Top}>
				<div className={classes.LeftGroup}>
					<img className={classes.Avatar} src={avatar} alt="" />
					<div className={classes.TopInfo}>
						<span className={classes.UserName}>{name}</span>
						<span className={classes.UserSubInfo}>{city}</span>
						<span className={classes.UserSubInfo}>{birthday}</span>
					</div>
				</div>

				<div className={classes.Buttons}>
					<Button className={classes.Button}>
						<AddFriendIcon />
					</Button>
					<Button className={classes.Button}>
						<MessageIcon className = {classes.IconColor}/>
					</Button>
				</div>
			</header>

			<main className={classes.Main}>
				<h1 className={classes.Title}>top-5 music : mode </h1>
				<div
					className={classes.TopFive}
					onMouseDown={dragStart}
					onMouseUp={dragEnd}
					onMouseLeave={dragEnd}
					ref={carouselRef}
				>
					<TopFiveMusicItem title="my music item" numOrder="1" src={avatar} />
					<TopFiveMusicItem title="my music item" numOrder="2" src={avatar} alt="" />
					<TopFiveMusicItem title="my music item" numOrder="3" src={avatar} alt="" />
					<TopFiveMusicItem title="my music item" numOrder="4" src={avatar} alt="" />
					<TopFiveMusicItem title="my music item" numOrder="5" src={avatar} alt="" />
					<TopFiveMusicItem title="my music item" numOrder="6" src={avatar} alt="" />
				</div>

				<h2 className={classes.Title}>most listening : mode</h2>

				<div>
					<MostListeningMusicItem title="my music item" src={avatar} album="album name" />
					<MostListeningMusicItem title="my music item" src={avatar} album="album name" />
					<MostListeningMusicItem title="my music item" src={avatar} album="album name" />
					<MostListeningMusicItem title="my music item" src={avatar} album="album name" />
				</div>
			</main>
			<Navigation/>
		</div>
	);
};
