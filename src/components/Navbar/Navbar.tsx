'use client'

import { cn } from '@/utils/clsx'
import { type FC } from 'react'
import { NavLinks } from '../NavLinks/NavLinks'
import s from './Navbar.module.scss'

type NavbarProps = {
	className?: string
}
export const Navbar: FC<NavbarProps> = ({ className }) => {
	return <NavLinks className={cn(className, s.navbar)} />
}
