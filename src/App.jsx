import "./App.css";
import Navbar from "./components/header/Navbar";
import Banner from "./components/header/Banner";
import RemovePrivateInfo from "./components/RemovePrivateInfo";
import PersonalData from "./components/PersonalData";
import DedicatedSupport from "./components/DedicatedSupport";
import WhyChooseUs from "./components/choose-us/WhyChooseUs";
import Review from "./components/Review";
import Pricing from "./components/pricing/Pricing";
import Footer from "./components/footer/Footer";

function App() {
	return (
		<div className="bg-[#050520]">
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
