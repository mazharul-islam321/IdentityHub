import logo from "../../assets/logo.svg";

const Logo = () => {
	return (
		<a
			className="flex items-center gap-2 whitespace-nowrap py-3 text-lg lg:flex-1"
			href="#"
		>
			<img
				className="max-w-[100px] md:max-w-[165px]"
				src={logo}
				alt="logo"
			/>
			<span className="hover:text-[#FFAC8E]">IdentityHub</span>
		</a>
	);
};

export default Logo;
