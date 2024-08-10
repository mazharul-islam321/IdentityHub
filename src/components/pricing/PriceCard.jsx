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
			className={`flex flex-col items-center justify-center  w-[352px] ${
				isHovar
					? "h-[674px] border-[#FFAB8F]"
					: "h-[634px] border-[#2C2D47]"
			} border border-solid rounded-[20px]  bg-gradient-to-br from-[#1B1C36]/[.16] to-[#70717A]/[.16] mt-6`}
		>
			<h2 className="text-[#AFB3CA] text-xl font-normal">
				{item.member}
			</h2>

			<h1 className={`text-[#CAD1E9] font-medium text-6xl mt-3 mb-2`}>
				${item.price}
			</h1>

			<p className={`text-[#AFB3CA] text-base font-normal`}>Per month</p>

			<div className="my-4">
				{item.facilities.map((facilitie) => (
					<div key={facilitie.id} className="flex items-center mb-3">
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
	);
};

export default PriceCard;
