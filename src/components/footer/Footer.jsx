import logo from "../../assets/logo.svg";

const Footer = () => {
	return (
		<footer className="text-center md:flex lg:flex xl:flex justify-evenly w-full pb-56 pt-20">
			<div className="flex justify-center mb-10">
				<a className="flex gap-2" href="#">
					<img src={logo} alt="logo" className="w-6 h-7" />
					<span className="hover:text-[#FFAC8E] text-[#CAD1E9] font-medium text-lg">
						IdentityHub
					</span>
				</a>
			</div>

			<div>
				<p className="text-[#CAD1E9] text-lg font-medium mb-6">
					{"It's free so why not"}
				</p>
				<p className="text-[#CAD1E9] text-base font-light">Pricing</p>
				<p className="text-[#CAD1E9] text-base font-light">Features</p>
				<p className="text-[#CAD1E9] text-base font-light">FAQ</p>
			</div>

			<div>
				<p className="text-[#CAD1E9] text-lg font-medium mb-6">
					Company
				</p>
				<p className="text-[#CAD1E9] text-base font-light">
					Our company
				</p>
				<p className="text-[#CAD1E9] text-base font-light">Security</p>
				<p className="text-[#CAD1E9] text-base font-light">Blog</p>
			</div>

			<div>
				<p className="text-[#CAD1E9] text-lg font-medium mb-6">Legal</p>
				<p className="text-[#CAD1E9] text-base font-light">
					Privacy policy
				</p>
				<p className="text-[#CAD1E9] text-base font-light">
					Terms of service
				</p>
				<p className="text-[#CAD1E9] text-base font-light">
					Prohibited use policy
				</p>
			</div>
		</footer>
	);
};

export default Footer;
