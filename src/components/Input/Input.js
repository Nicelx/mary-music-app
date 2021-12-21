import React from 'react'
import classes from './Input.module.css'


export const Input = ({className, placeholder, support}) => {
	const clx = [classes.Input]
	if (className) clx.push(className);


	return (
		<>
			<input className = {clx.join(' ')} placeholder = {placeholder} />
			{support && support}
		</>
			
	)
}
