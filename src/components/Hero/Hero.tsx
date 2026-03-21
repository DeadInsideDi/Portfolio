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
					<h1>Я - Frontend Разработчик</h1>
					<p>
						Создаю современные проекти на React и TypeScript. Для меня важен
						чистый код, адаптивность и отличный UX.
					</p>
				</div>

				<div className={s.presentation}>
					<div className={s.speech}>Привет!</div>
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
