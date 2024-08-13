import play_circle from "../../assets/play-circle.svg";

const PlayButton = () => {
	return (
		<div className="relative inline-flex h-12 w-44 items-center justify-center bg-gradient-to-r from-[#4E4E69]/[0.3] to-[#4E4E69]/[1] rounded-xl text-[#CAD1E9] p-px my-1">
			<a
				href="#"
				className="relative inline-flex h-full w-full items-center justify-center text-lg  bg-gradient-to-t from-[#21223C] to-[#0B0B26] rounded-xl "
			>
				<img src={play_circle} alt="" className="mr-2" />
				How it work
			</a>
		</div>
	);
};

export default PlayButton;
