'use client'

import { CONFIG } from '@/config/main.config'
import { type FC } from 'react'
import { Contacts } from '../Contacts/Contacts'
import { Container } from '../Container/Container'
import { Logo } from '../Logo/Logo'
import { NavLinks } from '../NavLinks/NavLinks'
import s from './Footer.module.scss'

export const Footer: FC = () => {
	return (
		<footer className={s.footer}>
			<Container className={s.content}>
				<Logo className={s.logo} />
				<NavLinks className={s.links} />
			</Container>

			<Container className={s.content}>
				<p>
					&copy; {new Date().getFullYear()} {CONFIG.company}. All rights
					reserved.
				</p>
				<Contacts className={s.contacts} />
			</Container>
		</footer>
	)
}
