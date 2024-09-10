import React from 'react';

const CustomButton = ({ title, handleClick }) => {
	return (
		<button className='custom-button' onClick={handleClick}>
			{title}
		</button>
	);
};

export default CustomButton;
