/* eslint-disable react/prop-types */

import MenuOption from "./MenuOption";

const Menu = ({ isToggleOpen }) => {
	return (
		<ul
			className={`absolute left-0 top-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-[#4E4E69] px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 xl:visible xl:relative xl:top-0  xl:z-0 xl:flex xl:h-full xl:w-auto xl:items-stretch xl:overflow-visible xl:bg-white/0 xl:px-0 xl:py-0  xl:pt-0 xl:opacity-100 ${
				isToggleOpen
					? "visible opacity-100 backdrop-blur-sm"
					: "invisible opacity-0"
			}`}
		>
			<MenuOption text="How it works" />
			<MenuOption text="Features" />
			<MenuOption text="Pricing" />
			<MenuOption text="Partners" />
			<MenuOption text="About us" />
		</ul>
	);
};

export default Menu;
