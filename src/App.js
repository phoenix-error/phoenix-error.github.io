import React from 'react';
import ReactGA from 'react-ga4';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Work from './components/Portfolio/Work';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';
import Blog from './components/blog/Blog';

const TRACKING_ID = process.env.GOOGLE_ANALYTICS_ID; // OUR_TRACKING_ID
ReactGA.initialize([
	{
		trackingId: TRACKING_ID,
	},
]);
ReactGA.send({ hitType: 'pageview', page: window.location.pathname });
const App = () => {
	return (
		<>
			<Header />

			<main className="main">
				<Home />
				<About />
				<Blog />
				<Skills />
				{/** <Services /> */}
				<Work />
				{/*<Testimonials />*/}
				<Contact />
			</main>

			<Footer />
			<ScrollUp />
		</>
	);
};

export default App;
