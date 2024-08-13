import ArrowRight from "../../assets/icons/ArrowRight";

const TrialGradButton = () => {
	return (
		<div className="relative inline-flex h-12 w-44 items-center justify-center bg-gradient-to-l from-[#FFAB8F] via-[#FF8EC1] to-[#B67EFD] rounded-xl  p-px my-1">
			<a
				href="#"
				className="relative inline-flex h-full w-full items-center justify-center text-lg  bg-gradient-to-t from-[#21223C] to-[#0B0B26] rounded-xl "
			>
				<span className="inline-block bg-gradient-to-r from-[#FF8AC7]/[1] to-[#FEBA75]/[1] bg-clip-text text-transparent font-semibold">
					Start free trial
				</span>
				<div className="ml-4">
					<ArrowRight color="#FFAD8B" />
				</div>
			</a>
		</div>
	);
};

export default TrialGradButton;
