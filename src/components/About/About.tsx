'use client'

import { GeoLocationIcon } from '@/assets'
import { type FC } from 'react'
import { Container } from '../Container/Container'
import { Section } from '../Section/Section'
import s from './About.module.scss'

export const About: FC = () => {
	return (
		<Section id='about'>
			<Container>
				<h2>About Me</h2>
				<div className={s.content}>
					<div className={s.box}>
						<p>
							I specialize in transforming complex designs into
							high-performance, pixel-perfect web applications. My expertise
							lies in the React ecosystem, utilizing TypeScript to build
							scalable, type-safe architectures that bridge the gap between
							creative vision and functional reality.
						</p>
						<div className={s.location}>
							<GeoLocationIcon />
							<span>Live and work in Russia, Volgograd</span>
						</div>
					</div>

					<div className={s.description}>
						<p>
							With a strong focus on modern frontend technologies, I bring ideas
							to life through clean, maintainable code and attention to detail.
							I believe in creating web experiences that are not only visually
							appealing but also performant and accessible.
						</p>
						<p>
							My development approach combines technical expertise with creative
							problem-solving, ensuring that every project meets both business
							objectives and user needs.
						</p>
						<p>
							When I'm not coding, I enjoy contributing to open-source projects,
							solving algorithm challenges, and staying updated with the latest
							trends in web development.
						</p>
					</div>
				</div>
			</Container>
		</Section>
	)
}
