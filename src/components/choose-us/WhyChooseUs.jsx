import Subtitle from "./Subtitle";
import Title from "./Title";
import info from "../../assets/inform.svg";
import sec_valid from "../../assets/security-validation.svg";
import user from "../../assets/user.svg";
import analytics from "../../assets/analytics.svg";

const WhyChooseUs = () => {
	return (
		<section className="flex items-center justify-center px-24">
			<div className="py-5">
				<div className="lg:text-center">
					<h1 className="text-[#CAD1E9] font-medium text-6xl my-3">
						Why choose us
					</h1>

					<p className="text-[#AFB3CA] text-base font-normal  mt-5 pb-8 xl:w-1/4 lg:mx-auto">
						We are the only service that provides all 3 services as
						a packaged service
					</p>
				</div>

				<dic className=" lg:flex lg:items-center lg:justify-center gap-9 mt-10 pb-10">
					<div className="w-[600px] h-[504px] border border-solid rounded-[20px] border-[#2C2D47]/[1] bg-gradient-to-br from-[#1B1C36]/[.16] to-[#70717A]/[.16] p-10 mt-5">
						<Title text="Personal information removal" />
						<Subtitle text="We purge your personal data from online sources, using automated and manual methods.A privacy expert oversees removals and handles any manual activities." />

						<div className="w-[520px] h-[272px] border border-solid rounded-[20px] border-[#2C2D47]/[1] bg-gradient-to-br from-[#1B1C36]/[.16] to-[#70717A]/[.16] pt-[18px] pl-6 pb-5">
							<img src={info} alt="information" />
							<div className="mt-3 mb-6">
								<div className="w-36  xl:w-[473px] h-[15px] bg-[#CAD1E9] rounded-[32px]" />
								<div className="w-36  xl:w-[473px] h-[15px] bg-[#CAD1E9] rounded-[32px] mt-2" />

								<div className="w-36  xl:w-[378px] h-[15px] bg-[#CAD1E9]/[.6] rounded-[32px] mt-2" />
								<div className="w-36 xl:w-[308px] h-[15px] bg-[#CAD1E9]/[.3]  rounded-[32px] mt-2" />
								<div className="w-36 xl:w-[261px] h-[15px] bg-[#CAD1E9]/[.3]  rounded-[32px] mt-2" />
							</div>
							<button className="w-[132px] h-11 rounded-[14px] border border-[#FFFFFF]/[.17] bg-[#ED5959] text-white font-medium text-base">
								Delete
							</button>
						</div>
					</div>

					<div className="w-[600px] h-[504px] border border-solid rounded-[20px] border-[#2C2D47]/[1] bg-gradient-to-br from-[#1B1C36]/[.16] to-[#70717A]/[.16] p-10 mt-5">
						<Title text="Cloaking alias profiles" />
						<Subtitle text="You'll receive regular reports on your privacy status and any outstanding threats. If new records become associated with you, we will send you an alert." />

						<img src={sec_valid} alt="security validation" />

						<div className=" flex justify-start w-[484px] h-[108px] border border-solid rounded-[20px] border-[#2C2D47]/[1] bg-gradient-to-br from-[#1B1C36]/[.16] to-[#70717A]/[.16] p-7 mt-12">
							<div className="flex items-start">
								<div className="flex justify-center items-center bg-[#2D2E48]/[.5] w-14 h-14 border border-solid rounded-2xl border-[#FFFFFF]/[.07]">
									<img src={user} alt="user" />
								</div>

								<div className="ml-6">
									<div className="w-36  xl:w-[236px] h-3 bg-[#CAD1E9] rounded-[32px]" />
									<div className="w-36  xl:w-[126px] h-3 bg-[#CAD1E9]/[.5] rounded-[32px] mt-[7px]" />
									<div className="w-36 xl:w-[71px] h-3 bg-[#CAD1E9]/[.5]  rounded-[32px] mt-[7px]" />
								</div>
							</div>
						</div>
					</div>
				</dic>

				<div className="w-full h-[275px] flex items-center justify-between border border-solid rounded-[20px] border-[#2C2D47]/[1] bg-gradient-to-br from-[#1B1C36]/[.16] to-[#70717A]/[.16] p-10">
					<div className="w-1/3">
						<Title text="Detailed Reporting" />
						<Subtitle text="You'll receive regular reports on your privacy status and any outstanding threats. If new records become associated with you, we will send you an alert." />
					</div>

					<div className=" flex justify-start w-[484px] h-[195px] border border-solid rounded-[20px] border-[#2C2D47]/[1] bg-gradient-to-br from-[#1B1C36]/[.16] to-[#70717A]/[.16] p-7">
						<div className="flex items-center">
							<div className="flex justify-center items-center bg-[#2D2E48] w-[152px] h-[152px] border border-solid rounded-2xl border-[#FFFFFF]/[.07]">
								<img src={analytics} alt="analytics" />
							</div>

							<div className="ml-6">
								<div className="w-36  xl:w-[236px] h-4 bg-[#CAD1E9] rounded-[32px]" />
								<div className="w-36  xl:w-[126px] h-4 bg-[#CAD1E9]/[.5] rounded-[32px] mt-[7px]" />
								<div className="w-36  xl:w-[126px] h-4 bg-[#CAD1E9]/[.5] rounded-[32px] mt-[7px]" />
								<div className="w-36 xl:w-[71px] h-4 bg-[#CAD1E9]/[.5]  rounded-[32px] mt-[7px]" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default WhyChooseUs;
