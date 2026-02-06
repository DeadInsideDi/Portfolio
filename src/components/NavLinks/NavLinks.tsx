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
				<a href='#home'>Home</a>
			</li>
			<li>
				<a href='#about'>About</a>
			</li>
			<li>
				<a href='#skills'>Skills</a>
			</li>
			<li>
				<a href='#links'>Links</a>
			</li>
			<li>
				<a href='#projects'>Projects</a>
			</li>
		</ul>
	)
}
