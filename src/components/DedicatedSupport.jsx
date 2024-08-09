import HeaderText from "./common/HeaderText";
import SubHeaderText from "./common/SubHeaderText";
import user from "../assets/user.svg";
import support from "../assets/customer-support.svg";

const DedicatedSupport = () => {
	return (
		<section className=" lg:flex lg:items-center pb-20 py-9">
			<div className="w-1/2 ml-32 ">
				<HeaderText text="Dedicated Support" />

				<SubHeaderText text="Forget about spam, advertising mailings, hacking and attacking robots. Keep your real mailbox clean and secure. Temp Mail provides temporary, secure, anonymous, free, disposable email address." />
			</div>

			<div className="ml-32 lg:ml-0 w-80 h-64 xl:w-[459px] xl:h-[269px] border border-solid rounded-3xl border-[#2C2D47]/[1] bg-gradient-to-r from-[#0084FF]/[.16] via-[#FFAB90]/[.16] to-[#FD8AC8]/[.16]">
				<div className="flex flex-col justify-between w-80 h-64 xl:w-[489px] xl:h-[254px] border border-solid rounded-3xl border-[#2C2D47]/[1] bg-gradient-to-r from-[#1B1C36]/[.16] to-[#00000B]/[.16] relative top-10 right-16 backdrop-blur-sm pt-6 pl-6 pb-6">
					<div className="flex">
						<div className="flex justify-center items-center bg-[#2D2E48]/[.5] w-14 h-14 border border-solid rounded-2xl border-[#FFFFFF]/[.07]">
							<img src={user} alt="user" />
						</div>

						<div className="ml-4">
							<div className="w-36  xl:w-[260px] h-[18px] bg-[#CAD1E9] rounded-[32px]" />
							<div className=" w-36 xl:w-[279px] h-[11px] bg-[#CAD1E9] rounded-[32px]  mt-3" />
							<div className="w-36  xl:w-[347px] h-[11px] bg-[#CAD1E9]/[.4] rounded-[32px] mt-3" />
							<div className="w-36 xl:w-[376px] h-[11px] bg-[#CAD1E9]/[.4]  rounded-[32px] mt-3" />
						</div>
					</div>

					<div className="flex items-center">
						<div className="flex justify-center items-center bg-[#2D2E48]/[.5] w-14 h-14 border border-solid rounded-2xl border-[#FFFFFF]/[.07]">
							<img src={support} alt="customer support" />
						</div>

						<button className="w-[90px] h-11 rounded-2xl border border-[#FFFFFF]/[.17] bg-[#ED5959] text-white font-medium text-base ml-4">
							Reply
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default DedicatedSupport;
