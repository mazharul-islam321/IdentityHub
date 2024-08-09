/* eslint-disable react/prop-types */

const InfoCard = ({ img, alt_text, first_text, second_text }) => {
	return (
		<div className="flex items-center pl-3 w-60 h-[74px] border border-solid rounded-[20px] border-[#2C2D47]/[1] bg-gradient-to-r from-[#1B1C36]/[.16] to-[#70717A]/[.16] backdrop-blur-sm">
			<div className="flex justify-center items-center bg-[#2D2E48]/[.5] w-14 h-14 border border-solid rounded-2xl border-[#FFFFFF]/[.07]">
				<img src={img} alt={alt_text} />
			</div>

			<div className="ml-3.5 text-[#AFB3CA]">
				<p className="font-normal text-sm">{first_text}</p>
				<p className="font-medium text-base">{second_text}</p>
			</div>
		</div>
	);
};

export default InfoCard;
