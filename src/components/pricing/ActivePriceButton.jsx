const ActivePriceButton = () => {
	return (
		<div className="relative inline-flex h-12 w-80 md:w-72 xl:w-80 items-center justify-center bg-gradient-to-l from-[#FFAB8F] via-[#FF8EC1] to-[#B67EFD] rounded-xl  p-px">
			<a
				href="#"
				className="relative inline-flex h-full w-full items-center justify-center text-lg  bg-gradient-to-t from-[#21223C] to-[#0B0B26] rounded-xl "
			>
				<span className="inline-block bg-gradient-to-r from-[#FF8AC7]/[1] to-[#FEBA75]/[1] bg-clip-text text-transparent font-semibold">
					Request access
				</span>
			</a>
		</div>
	);
};

export default ActivePriceButton;
