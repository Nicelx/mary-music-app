import React from 'react'
import classes from './Input.module.css'


export const Input = ({className, placholder, support}) => {
	const clx = [classes.Input]
	if (className) clx.push(className);


	return (
		<>
			<input className = {clx.join(' ')} placeholder = {placholder} />
			{support && support}
		</>
			
	)
}
