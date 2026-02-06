'use client'

import { CheckIcon, ChevronDownIcon } from '@/assets'
import { THEMES, THEMES_NAMES } from '@/config/theme.config'
import { useClickOutside } from '@/hooks/useClickOutside'
import { useThemeStore } from '@/store/theme.store'
import { cn } from '@/utils/clsx'
import { useState, type FC } from 'react'
import s from './ThemeDropdown.module.scss'

type ThemeDropdownProps = {
	className?: string
}
export const ThemeDropdown: FC<ThemeDropdownProps> = ({ className }) => {
	const [isOpen, setIsOpen] = useState(false)
	const { theme: currentTheme, setTheme } = useThemeStore(state => state)
	const ref = useClickOutside<HTMLDivElement>(() => {
		setIsOpen(false)
	})

	return (
		<div
			className={cn(className, s.dropdown)}
			ref={ref}
		>
			<button
				onClick={() => setIsOpen(isOpen => !isOpen)}
				className={s.trigger}
				aria-expanded={isOpen}
				aria-haspopup='true'
				aria-label='Select theme'
			>
				{THEMES_NAMES[currentTheme]}
				<ChevronDownIcon />
			</button>

			{isOpen && (
				<div
					className={s.menu}
					role='menu'
					aria-label='Theme selection'
				>
					{Object.values(THEMES).map(theme => (
						<button
							key={theme}
							onClick={() => {
								setTheme(theme)
								setIsOpen(false)
							}}
							className={s.option}
							role='menuitemradio'
							aria-checked={currentTheme === theme}
						>
							{THEMES_NAMES[theme]}
							{currentTheme === theme && <CheckIcon />}
						</button>
					))}
				</div>
			)}
		</div>
	)
}
