'use client'

import { cn } from '@/utils/clsx'
import { type FC } from 'react'
import s from './NavLinks.module.scss'

type NavLinksProps = {
	className?: string
}
export const NavLinks: FC<NavLinksProps> = ({ className }) => {
	return (
		<ul className={cn(className, s.links)}>
			<li>
				<a href='#home'>Главная</a>
			</li>
			<li>
				<a href='#about'>Обо мне</a>
			</li>
			<li>
				<a href='#skills'>Навыки</a>
			</li>
			<li>
				<a href='#links'>Ссылки</a>
			</li>
			<li>
				<a href='#projects'>Проекты</a>
			</li>
		</ul>
	)
}
