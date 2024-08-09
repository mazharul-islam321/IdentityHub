import ArrowRight from "../../assets/icons/ArrowRight";

const TrialButton = () => {
	return (
		<div className="ml-auto flex items-center justify-end px-6 lg:ml-0 lg:flex-1 xl:p-0 ">
			<div className="relative inline-flex h-12 w-44 items-center justify-center bg-gradient-to-r from-[#4E4E69]/[0.3] to-[#4E4E69]/[1] rounded-xl hover:text-[#FFAC8E] p-px">
				<a
					href="#"
					className="relative inline-flex h-full w-full items-center justify-center text-lg  bg-gradient-to-t from-[#21223C] to-[#0B0B26] rounded-xl "
				>
					Start free trial
					<div className="ml-4">
						<ArrowRight />
					</div>
				</a>
			</div>
		</div>
	);
};

export default TrialButton;
