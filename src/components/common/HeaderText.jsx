/* eslint-disable react/prop-types */

const HeaderText = ({ text }) => {
	return (
		<h1
			className={`text-[#CAD1E9] font-medium text-4xl md:text-5xl xl:text-6xl my-3 mx-5 md:mx-0 text-center md:text-left  md:w-3/4`}
		>
			{text}
		</h1>
	);
};

export default HeaderText;
