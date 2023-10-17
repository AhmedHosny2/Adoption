import '../../App.css';
import Navbar from '../../components/navbar/navbar';
import HomeHero from '../../components/homeHero/homeHero';
import HomeSection1 from '../../components/homeSection1/homeSection1';
import HomeSection2 from '../../components/homeSection2/homeSection2';
import Footer from '../../components/footer/footer';

function Homepage() {
	return (
		<>
			<Navbar />
			<HomeHero />
			<HomeSection1 />
			<HomeSection2 />
			<Footer />
		</>
	);
}

export default Homepage;
