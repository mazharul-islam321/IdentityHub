/* eslint-disable react/prop-types */

const ArrowRight = ({ color }) => {
	return (
		<svg
			width={8}
			height={12}
			viewBox="0 0 8 12"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M1.50004 1C1.50004 1 6.5 4.68242 6.5 6C6.5 7.31767 1.5 11 1.5 11"
				stroke={color ? color : "#CAD1E9"}
				strokeWidth={1.25}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export default ArrowRight;
