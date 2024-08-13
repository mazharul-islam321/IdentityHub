import { useState } from "react";

import Menu from "./Menu";
import Logo from "./Logo";
import MobileTriggerButton from "./MobileTriggerButton";
import TrialButton from "./TrialButton";

// border-white/[0.2]

const Navbar = () => {
	const [isToggleOpen, setIsToggleOpen] = useState(false);

	return (
		<header className="relative z-20 w-full border-b border-white/[0.2]  after:absolute after:left-0 after:top-full after:z-10 after:block after:h-px after:w-full after:bg-white/[0.2] lg:border-white/[0.2] lg:backdrop-blur-sm lg:after:hidden">
			<div className="relative mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
				<nav className="flex h-[5.5rem] items-stretch justify-between font-medium text-[#CAD1E9]">
					<Logo />

					<MobileTriggerButton
						isToggleOpen={isToggleOpen}
						setIsToggleOpen={setIsToggleOpen}
					/>

					<Menu isToggleOpen={isToggleOpen} />

					<TrialButton />
				</nav>
			</div>
		</header>
	);
};

export default Navbar;
