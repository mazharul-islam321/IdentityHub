import HeaderText from "./common/HeaderText";
import SubHeaderText from "./common/SubHeaderText";
import image_g from "../assets/image_g.svg";
import ai_lock from "../assets/ai-lock.svg";

const RemovePrivateInfo = () => {
	return (
		<section className="lg:flex mx-28 pt-6 pb-28 xl:pb-14">
			<div className="">
				<HeaderText text="We remove your private information from the online" />

				<SubHeaderText text="People-search sites use government records and online databases to create detailed profiles of virtually every citizen." />
				<SubHeaderText text="They then sell this sensitive information online, where it can end up in the hands of hackers, identity thieves, and stalkers." />
				<SubHeaderText text="ReputationDefender stops people-search sites by opting our clients out of them." />
			</div>

			<div className="w-80 h-80 xl:w-[489px] xl:h-[343px] border border-solid rounded-3xl border-[#2C2D47]/[1] bg-gradient-to-r from-[#0084FF]/[.16] via-[#FFAB90]/[.16] to-[#FD8AC8]/[.16]">
				<div className="w-80 h-80 xl:w-[489px] xl:h-[343px] border border-solid rounded-3xl border-[#2C2D47]/[1] bg-gradient-to-r from-[#1B1C36]/[.16] to-[#00000B]/[.16] relative top-14 right-14 backdrop-blur-sm">
					<div className="w-36  xl:w-[260px] h-[23px] bg-[#CAD1E9] rounded-[32px]  mt-8 ml-9 " />
					<div className=" w-36 xl:w-[279px] h-[23px] bg-[#CAD1E9] rounded-[32px]  mt-20 ml-4" />
					<div className="w-36  xl:w-[347px] h-[23px] bg-[#CAD1E9]/[.4] rounded-[32px] mt-3 ml-5" />
					<div className="w-36 xl:w-[376px] h-[23px] bg-[#CAD1E9]/[.4]  rounded-[32px] mt-3 ml-5" />

					<div className="flex items-center justify-center w-20 h-20 xl:w-[121px] xl:h-[121px] border-[4px] border-solid rounded-[30px] border-[#FFFFFF]/[.11] bg-[#0B1023] absolute -left-16 z-50 top-1/3">
						<img src={image_g} alt="" />
					</div>

					<div className="flex items-center justify-center w-20 h-20  xl:w-[121px] xl:h-[121px] border-[4px] border-solid rounded-[30px] border-[#FFFFFF]/[.11] bg-[#0B1023] absolute -right-7 -bottom-12">
						<img src={ai_lock} alt="" />
					</div>

					<button className="w-24 h-11 rounded-2xl border border-[#FFFFFF]/[.17] bg-[#ED5959] text-white font-medium text-base absolute bottom-5 -left-6">
						Delete
					</button>
				</div>
			</div>
		</section>
	);
};

export default RemovePrivateInfo;
