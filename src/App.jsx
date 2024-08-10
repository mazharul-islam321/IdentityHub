import "./App.css";
import WhyChooseUs from "./components/choose-us/WhyChooseUs";
import DedicatedSupport from "./components/DedicatedSupport";
import Footer from "./components/footer/Footer";
import Banner from "./components/header/Banner";
import Navbar from "./components/header/Navbar";
import PersonalData from "./components/PersonalData";
import Pricing from "./components/pricing/Pricing";

import RemovePrivateInfo from "./components/RemovePrivateInfo";
import Review from "./components/Review";

function App() {
	return (
		<div className="w-full h-full bg-[#050520]">
			<Navbar />
			<Banner />
			<RemovePrivateInfo />
			<PersonalData />
			<DedicatedSupport />
			<WhyChooseUs />
			<Review />
			<Pricing />
			<Footer />
		</div>
	);
}

export default App;
