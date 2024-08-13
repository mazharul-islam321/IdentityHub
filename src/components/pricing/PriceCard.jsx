/* eslint-disable react/prop-types */

import ActivePriceButton from "./ActivePriceButton";
import InactivePriceButton from "./InactivePriceButton";
import checkmark from "../../assets/checkmark.svg";
import no_checkmark from "../../assets/no-checkmark.svg";
import { useState } from "react";

const PriceCard = ({ item }) => {
	const [isHovar, setIsHover] = useState(false);

	return (
		<div
			onMouseOver={() => setIsHover(true)}
			onMouseOut={() => setIsHover(false)}
			className={`flex w-[352px]  md:w-[320px] xl:w-[352px]  items-center justify-center bg-gradient-to-r 
				${
					isHovar
						? "h-[690px] from-[#B67EFD] via-[#FF8EC1] to-[#FFAB8F]"
						: "h-[634px] from-[#2C2D47]/[1]  to-[#444AE2]/[.5]"
				} rounded-[32px]  p-px mt-5 xl:mt-0`}
		>
			<div className="h-full w-full flex flex-col  items-center justify-center text-lg  bg-gradient-to-br from-[#0B0B26] to-[#21223C] rounded-[32px] ">
				<h2 className="text-[#AFB3CA] text-xl font-normal">
					{item.member}
				</h2>

				<h1 className={`text-[#CAD1E9] font-medium text-6xl mt-3 mb-2`}>
					${item.price}
				</h1>

				<p className={`text-[#AFB3CA] text-base font-normal`}>
					Per month
				</p>

				<div className="my-4">
					{item.facilities.map((facilitie) => (
						<div
							key={facilitie.id}
							className="flex items-center mb-3"
						>
							{facilitie.type ? (
								<img src={checkmark} alt="" />
							) : (
								<img src={no_checkmark} alt="" />
							)}

							<p className="text-[#AFB3CA] text-base font-normal ml-2">
								{facilitie.text}
							</p>
						</div>
					))}
				</div>

				{isHovar ? <ActivePriceButton /> : <InactivePriceButton />}

				<p className="text-[#AFB3CA] text-base font-normal mt-3">
					{item.isFree}
				</p>
			</div>
		</div>
	);
};

export default PriceCard;
