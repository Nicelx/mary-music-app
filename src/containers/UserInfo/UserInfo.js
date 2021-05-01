import React, { useRef } from "react";
import classes from "./UserInfo.module.css";
import { Button, MusicItem } from "../../components";
import { ReactComponent as AddFriendIcon } from "../../images/icons/addFriend.svg";
import { ReactComponent as MessageIcon } from "../../images/icons/message.svg";
import { useState } from "react";
import { debounce } from "./../../utils/utils";

export const UserInfo = (props) => {
	const { user } = props.user;
	const { name, city, birthday, avatar } = user;

	const [x, setX] = useState("");
	const [scroll, setScroll] = useState(0);

	const carouselRef = useRef();

	const dragStart = (e) => {
		// const scroll = carouselRef.current.scrollLeft;
		// setX(e.clientX + scroll);
		// setScroll(scroll)
		// carouselRef.current.onMouseMove = (e) => dragEnd;
		// carouselRef.current.addEventListener("mousemove", dragMove);
		carouselRef.current.onmousemove = (e) => debounce(() => dragMove(e));
		// return function cleanup() {
		//
		// };
	};

	// const dragMoveDebounced = (e) => debounce(() => {
	// 	const xM = e.clientX + carouselRef.current.scrollLeft;
	// 	const diff = x - xM;
	// 	console.log(x, e.clientX, diff, xM)
	// 	carouselRef.current.scrollLeft += diff;
	// })

	const dragMove = (e) => {
		// const xM = e.clientX + carouselRef.current.scrollLeft;
		// const diff = xM - x;
		// setX(xM)
		// console.log(e )

		carouselRef.current.scrollLeft -= e.movementX * 2.5;
	};

	const dragEnd = (e) => {
		// carouselRef.current.style.transform = `translateX(${diff}px)`;
		// const scroll = carouselRef.current.scrollLeft;
		// setX(e.clientX + scroll);
		carouselRef.current.onmousemove = null;
		// carouselRef.current.removeEventListener("mousemove", dragMove);
	};

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
						<MessageIcon />
					</Button>
				</div>
			</header>

			<main className={classes.Main}>
				<h1 className={classes.TitleTopFive}>top-5 music : mode </h1>
				<div
					className={classes.TopFive}
					onMouseDown={dragStart}
					onMouseUp={dragEnd}
					onMouseLeave={dragEnd}
					ref={carouselRef}
				>
					<MusicItem title="my music item" numOrder="1" src={avatar} />
					<MusicItem title="my music item" numOrder="2" src={avatar} alt="" />
					<MusicItem title="my music item" numOrder="3" src={avatar} alt="" />
					<MusicItem title="my music item" numOrder="4" src={avatar} alt="" />
					<MusicItem title="my music item" numOrder="5" src={avatar} alt="" />
					<MusicItem title="my music item" numOrder="6" src={avatar} alt="" />
				</div>
			</main>
			<nav className={classes.Navigation}></nav>
		</div>
	);
};
