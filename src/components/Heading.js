const Heading = ({ title, big }) => {
	return (
		<h1 className={`heading ${big && 'big-heading'}`}>
			{title}
			<span></span>
		</h1>
	);
};

export default Heading;
