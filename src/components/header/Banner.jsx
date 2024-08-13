import banner_img from "../../assets/security_lock.svg";
import mail from "../../assets/mail.svg";
import user from "../../assets/user.svg";
import InfoCard from "../common/InfoCard";
import TrialGradButton from "./TrialGradButton";
import PlayButton from "./PlayButton";
import BannerDesign from "./BannerDesign";

const Banner = () => {
	return (
		<section className="relative md:flex  xl:flex items-center xl:px-36 px-10 py-24 border-b border-b-1 border-white/[0.2]">
			<div>
				<div className="">
					<h1 className="inline-block bg-gradient-to-r from-[#0084FF]/[1] via-[#FF8AC7]/[1] to-[#FEBA75]/[1] bg-clip-text text-transparent font-semibold text-7xl">
						Protect your
					</h1>
					<h1 className="text-[#CAD1E9] font-semibold text-7xl my-3">
						privacy online
					</h1>
				</div>
				<p className="text-[#AFB3CA] text-base font-normal w-3/5 my-8">
					IdentityHub offers a suite of services to help you take back
					control of your online identity. Keep your data secure,
					manage your digital footprint, and protect yourself from
					identity theft.
				</p>
				<div className="flex items-center gap-4">
					<TrialGradButton />
					<PlayButton />
				</div>
			</div>

			<BannerDesign />

			<div className="flex flex-col items-center mt-8 item-center xl:relative">
				<img
					src={banner_img}
					alt="banner img"
					className="block w-50 xl:w-96 md:mb-2 mb-7"
				/>

				<div className="xl:absolute xl:-left-48 top-16 my-4">
					<InfoCard
						img={mail}
						alt_text="email"
						first_text="Email address"
						second_text="nija@gmail.com"
					/>
				</div>

				<div className="xl:absolute xl:-left-28 -bottom-4 my-4">
					<InfoCard
						img={user}
						alt_text="email"
						first_text="User name"
						second_text="tufayel nija"
						className="absolute top-10"
					/>
				</div>
			</div>
		</section>
	);
};

export default Banner;
