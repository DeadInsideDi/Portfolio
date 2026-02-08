'use client'

import { type FC } from 'react'
import { Container } from '../Container/Container'
import s from './Hero.module.scss'

export const Hero: FC = () => {
	return (
		<section
			id='home'
			className={s.hero}
		>
			<Container className={s.container}>
				<div className={s.content}>
					<h1>
						Hi, I'm a <span>Frontend Developer</span>
					</h1>
					<p>
						I create modern, responsive web applications with clean code and
						exceptional user experiences. Passionate about React ecosystem and
						TypeScript.
					</p>
				</div>

				<div className={s.presentation}>
					<div className={s.speech}>Welcome!</div>
					<div className={s.image}>
						<div className={s.shape}></div>
						<img
							src='/author-photo.webp'
							alt='Author Photo'
							fetchPriority='high'
							rel='preload'
						/>
					</div>
				</div>
			</Container>
		</section>
	)
}
