import Blocks from './components/Bloks/Blocks'
import Comments from './components/Comments/Comments'
import Features from './components/Features/Features'
import Header from './components/Header/Header'
import HeroSection from './components/HeroSection/HeroSection'
import Network from './components/Network/Network'
import Plans from './components/Plans/Plans'
import Stats from './components/Stats/Stats'
import Subscribe from './components/Subscribe/Subscribe'

function App() {
	return (
		<div className='app'>
			<Header />
			<main className='main'>
				<HeroSection />
				<Stats />
				<Features />
				<Plans />
				<Network />
				<Comments />
				<Subscribe />
				<Blocks />
			</main>
			{/* <Footer /> */}
		</div>
	)
}

export default App
