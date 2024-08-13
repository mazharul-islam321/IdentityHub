/* eslint-disable react/prop-types */

const SubHeaderText = ({ text }) => {
	return (
		<p
			className={`text-[#AFB3CA] text-base  text-center md:text-left font-normal  my-8 mx-5 md:mx-0 md:w-3/4`}
		>
			{text}
		</p>
	);
};

export default SubHeaderText;
