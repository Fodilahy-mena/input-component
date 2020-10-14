import React from 'react';
import IconCall from '../assets/call.svg';
import IconLock from '../assets/lock.svg'

const Icon = props => {
	let icon;
	const style = props.align === 'right' ? 'icon--right' : null;
	switch (props.name) {
		case 'icon-call':
			icon = <img src={IconCall} className={style} />;
			break;
		case 'anchor':
			icon = <img src={IconLock} className={style} />;
			break;
		default:
			icon = <span />;
			break;
	}
	return icon;
};

export default Icon;