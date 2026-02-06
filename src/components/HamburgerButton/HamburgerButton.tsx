'use client'

import { cn } from '@/utils/clsx'
import { useState, type FC } from 'react'
import s from './HamburgerButton.module.scss'

type HamburgerButtonProps = React.ComponentProps<'button'> & {
	isActive?: boolean
}
export const HamburgerButton: FC<HamburgerButtonProps> = ({
	isActive: initalIsActive = false,
	className,
	onClick,
	...props
}) => {
	const [isActive, setIsActive] = useState(initalIsActive)

	return (
		<button
			className={cn(className, isActive && s.active, s.btn)}
			onClick={e => {
				setIsActive(!isActive)
				onClick?.(e)
			}}
			aria-expanded={isActive}
			aria-label={isActive ? 'Close menu' : 'Open menu'}
			{...props}
		>
			<svg
				viewBox='0 0 32 32'
				fill='none'
				strokeLinecap='round'
			>
				<path d='M27 10H13a4 4 0 114-4V26a4 4 0 104-4H7' />
				<path d='M7 16H27' />
			</svg>
		</button>
	)
}
