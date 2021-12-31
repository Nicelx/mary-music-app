import React, { useRef, useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Button, MostListeningMusicItem, TopFiveMusicItem, Post } from "../../components";
import { Navigation } from "./../Navigation/Navigation";

import { ReactComponent as AddFriendIcon } from "../../images/icons/addFriend.svg";
import { ReactComponent as MessageIcon } from "../../images/icons/message.svg";

import { debounce } from "./../../utils/utils";
import classes from "./UserInfo.module.css";

export const UserInfo = (props) => {
	const { userId } = useParams();
	const [user, setUser] = useState({});

	const carouselRef = useRef();
	const history = useHistory();

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

	const dummyMessage = {
		date: new Date(),
		text: "hello lalala",
		music: "",
		likes: 5,
	};
	const dummyUser = {};

	useEffect(() => {
		const token = localStorage.getItem("token");

		fetch(`http://localhost:8080/user/public/${userId}`, {
			method: "POST",
			headers: {
				Authorization: "Bearer " + token,
			},
		})
			.then((res) => {
				if (res.ok) return res.json();
			})
			.then((data) => {
				console.log(data);
				const { name, city, avatar, birthdate } = data;
				setUser({ name, city, avatar, birthdate });
			});
	}, []);

	return (
		<div className={classes.UserInfo}>
			<header className={classes.Top}>
				<div className={classes.LeftGroup}>
					<img className={classes.Avatar} src={user.avatar} alt="" />
					<div className={classes.TopInfo}>
						<span className={classes.UserName}>{user.name}</span>
						<span className={classes.UserSubInfo}>{user.city}</span>
						<span className={classes.UserSubInfo}>{user.birthday}</span>
					</div>
				</div>

				<div className={classes.Buttons}>
					<Button className={classes.Button}>
						<AddFriendIcon />
					</Button>
					<Button className={classes.Button}>
						<MessageIcon className={classes.IconColor} />
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
					<TopFiveMusicItem title="my music item" numOrder="1" src={user.avatar} />
					<TopFiveMusicItem title="my music item" numOrder="2" src={user.avatar} alt="" />
					<TopFiveMusicItem title="my music item" numOrder="3" src={user.avatar} alt="" />
					<TopFiveMusicItem title="my music item" numOrder="4" src={user.avatar} alt="" />
					<TopFiveMusicItem title="my music item" numOrder="5" src={user.avatar} alt="" />
					<TopFiveMusicItem title="my music item" numOrder="6" src={user.avatar} alt="" />
				</div>

				<h2 className={classes.Title}>most listening : mode</h2>

				<div>
					<MostListeningMusicItem
						title="my music item"
						src={user.avatar}
						album="album name"
					/>
					<MostListeningMusicItem
						title="my music item"
						src={user.avatar}
						album="album name"
					/>
					<MostListeningMusicItem
						title="my music item"
						src={user.avatar}
						album="album name"
					/>
					<MostListeningMusicItem
						title="my music item"
						src={user.avatar}
						album="album name"
					/>
					<div className={classes.SeeMore}>
						<h2 className={classes.SeeMoreText}>see more ::down</h2>
					</div>
				</div>

				<div className={classes.CommonMessages}>
					<div className={classes.CommonMessagesTitle}>
						<h2 className={classes.Title}>common messages</h2>
					</div>
					<div className={classes.Posts}>
						<Post user={dummyUser} message={dummyMessage} />
						<Post user={dummyUser} message={dummyMessage} />
					</div>
					<div className={classes.Margin}></div>
				</div>
			</main>
			<Navigation />
		</div>
	);
};
