import React from "react";
import { ButtonIcon } from "../";
import { ReactComponent as AddIcon } from "../../images/icons/plus.svg";
import { ReactComponent as PlayIcon } from "../../images/icons/playPink.svg";
import classes from "./Song.module.css";

export const Song = ({ song }) => {
	const { title, length } = song;

	return (
		<div className={classes.Song}>
			<div className = {classes.LeftGroup}>
				<ButtonIcon className={classes.ButtonIcon}>
					<PlayIcon />
				</ButtonIcon>
				<span>{title}</span>
			</div>
			<div className={classes.RightGroup}>
				<span className = {classes.Length}>{length}</span>
				<ButtonIcon className={classes.ButtonIcon}>
					<AddIcon />
				</ButtonIcon>
			</div>
		</div>
	);
};
