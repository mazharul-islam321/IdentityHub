import ellipse1 from "../../assets/half-circle/Ellipse1.svg";
import ellipse2 from "../../assets/half-circle/Ellipse2.svg";
import ellipse3 from "../../assets/half-circle/Ellipse3.svg";

const BannerDesign = () => {
	return (
		<>
			<img
				src={ellipse1}
				alt="banner back side design"
				className="absolute blur top-2 left-0 right-0 mx-auto"
			/>
			<img
				src={ellipse2}
				alt="banner back side design"
				className="absolute blur top-10 left-0 right-0 mx-auto"
			/>
			<img
				src={ellipse3}
				alt="banner back side design"
				className="absolute blur top-[80px] left-0 right-0 mx-auto"
			/>
		</>
	);
};

export default BannerDesign;
