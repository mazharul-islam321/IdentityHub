import "./App.css";
import Banner from "./components/header/Banner";
import Navbar from "./components/header/Navbar";
import PersonalData from "./components/PersonalData";
import RemovePrivateInfo from "./components/RemovePrivateInfo";

function App() {
	return (
		<div className="w-full h-full bg-[#050520]">
			<Navbar />
			<Banner />
			<RemovePrivateInfo />
			<PersonalData />
		</div>
	);
}

export default App;
