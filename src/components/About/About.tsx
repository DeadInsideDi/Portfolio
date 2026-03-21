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
				<h2>Обо Мне</h2>
				<div className={s.content}>
					<div className={s.box}>
						<p>
							Создаю веб-приложения на React и TypeScript. Превращаю сложные
							дизайны в масштабируемые проекты.
						</p>
						<div className={s.location}>
							<GeoLocationIcon />
							<span>Живу и работаю в Волгограде</span>
						</div>
					</div>

					<div className={s.description}>
						<p>
							Использую современный стек для создания чистого кода и продуманных
							интерфейсов. Мой приоритет — сочетание стиля, высокой
							производительности и доступности.
						</p>
						<p>
							Решаю задачи бизнеса, создавая продукты, удобные для
							пользователей.
						</p>
						<p>
							В свободное время решаю алгоритмические задачи и слежу за трендами
							веб-разработки.
						</p>
					</div>
				</div>
			</Container>
		</Section>
	)
}
