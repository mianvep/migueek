import "./App.css";
import { NavBar } from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Proyects } from "./components/Proyects";
import { Footer } from "./components/Footer";
import { Contact } from "./components/Contact";

function App() {
	return (
		<div className="App">
			<NavBar />
			<Banner />
			<Skills />
			<Proyects />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
