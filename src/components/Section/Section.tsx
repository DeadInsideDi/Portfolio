'use client'

import { cn } from '@/utils/clsx'
import { type FC, type PropsWithChildren } from 'react'
import s from './Section.module.scss'

type SectionProps = PropsWithChildren<unknown> & {
	id?: string
	className?: string
}
export const Section: FC<SectionProps> = ({ children, id, className }) => {
	return (
		<section
			id={id}
			className={cn(className, s.section)}
		>
			{children}
		</section>
	)
}
