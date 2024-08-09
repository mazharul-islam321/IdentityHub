import "./App.css";
import Banner from "./components/header/Banner";
import Navbar from "./components/header/Navbar";
import PrivateInfo from "./components/private-Info/PrivateInfo";

function App() {
	return (
		<div className="w-full h-full bg-[#050520]">
			<Navbar />
			<Banner />
			<PrivateInfo />
		</div>
	);
}

export default App;
