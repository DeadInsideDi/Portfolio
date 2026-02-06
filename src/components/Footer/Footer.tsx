'use client'

import { type FC } from 'react'
import { Container } from '../Container/Container'
import { Logo } from '../Logo/Logo'
import { NavLinks } from '../NavLinks/NavLinks'
import s from './Footer.module.scss'

export const Footer: FC = () => {
	return (
		<>
			<footer className={s.footer}>
				<Container className={s.content}>
					<Logo className={s.logo} />
					<NavLinks className={s.links} />
				</Container>

				<Container className={s.copyright}>
					<p>
						&copy; {new Date().getFullYear()} MatSen. All rights reserved.
						{' :)'}
					</p>
				</Container>
			</footer>
		</>
	)
}
