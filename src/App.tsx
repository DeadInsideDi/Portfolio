import { useLayoutEffect } from 'react'
import { About } from './components/About/About'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import { Links } from './components/Links/Links'
import { Projects } from './components/Projects/Projects'
import { Skills } from './components/Skills/Skills'
import { useThemeStore } from './store/theme.store'

function App() {
	const theme = useThemeStore(state => state.theme)

	useLayoutEffect(() => {
		document.documentElement.setAttribute('data-theme', theme)
	}, [theme])

	return (
		<>
			<Header />
			<main>
				<Hero />
				<About />
				<Skills />
				<Links />
				<Projects />
			</main>
			<Footer />
		</>
	)
}

export default App
