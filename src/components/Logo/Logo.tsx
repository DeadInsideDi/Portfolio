import { LogoIcon } from '@/assets'
import { CONFIG } from '@/config/main.config'
import { cn } from '@/utils/clsx'
import type { FC } from 'react'
import s from './Logo.module.scss'

type LogoProps = {
	className?: string
}
export const Logo: FC<LogoProps> = ({ className }) => {
	return (
		<a
			href='#'
			className={cn(className, s.logo)}
		>
			<LogoIcon />
			{CONFIG.company}
		</a>
	)
}
