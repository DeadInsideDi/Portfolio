'use client'

import { useState, type FC } from 'react'
import { Contacts } from '../Contacts/Contacts'
import { Container } from '../Container/Container'
import { HamburgerButton } from '../HamburgerButton/HamburgerButton'
import { Logo } from '../Logo/Logo'
import { Navbar } from '../Navbar/Navbar'
import { ThemeDropdown } from '../ThemeDropdown/ThemeDropdown'
import s from './Header.module.scss'

export const Header: FC = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

	return (
		<header className={s.header}>
			<Container>
				<nav>
					<Logo />

					<Navbar className={s.navbar} />
					<ThemeDropdown className={s.dropdown} />

					<HamburgerButton
						className={s.hamburger}
						onClick={() => setIsMobileMenuOpen(isOpen => !isOpen)}
					/>
				</nav>
			</Container>

			{isMobileMenuOpen && (
				<Container className={s.mobileContainer}>
					<Navbar className={s.mobileNavbar} />
					<div className={s.right}>
						<ThemeDropdown className={s.mobileDropdown} />
						<Contacts className={s.contacts} />
					</div>
				</Container>
			)}
		</header>
	)
}
