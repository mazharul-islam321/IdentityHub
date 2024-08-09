/* eslint-disable react/prop-types */

const MenuOption = ({ text }) => {
	return (
		<li role="none" className="flex items-stretch">
			<a
				className="flex items-center gap-2 py-4 duration-300 hover:text-[#FFAC8E] focus:text-[#FFAC8E] focus:outline-none focus-visible:outline-none lg:px-7"
				href="#"
			>
				<span>{text}</span>
			</a>
		</li>
	);
};

export default MenuOption;
