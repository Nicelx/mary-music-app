import React from 'react'
import classes from './Input.module.css'


export const Input = ({className, placeholder, support, ...props}) => {
	const clx = [classes.Input]
	if (className) clx.push(className);
	console.log('props , ', props);

	return (
		<>
			<input className = {clx.join(' ')} placeholder = {placeholder} onChange={props.onChange}/>
			{support && support}
		</>
			
	)
}
