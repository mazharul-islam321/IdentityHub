import logo from "../../assets/logo.svg";

const Logo = () => {
	return (
		<a
			className="flex items-center gap-2 whitespace-nowrap py-3 text-lg md:flex-1"
			href="#"
		>
			<img className="max-w-[50px]" src={logo} alt="logo" />
			<span className="hidden md:block md:hover:text-[#FFAC8E] md:text-[#CAD1E9]">
				IdentityHub
			</span>
		</a>
	);
};

export default Logo;
