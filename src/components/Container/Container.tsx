'use client'

import { cn } from '@/utils/clsx'
import { type FC, type PropsWithChildren } from 'react'
import s from './Container.module.scss'

type ContainerProps = PropsWithChildren<unknown> & {
	width?: string
	className?: string
}
export const Container: FC<ContainerProps> = ({
	children,
	width,
	className,
}) => {
	return (
		<div
			className={cn(className, s.container)}
			style={{ maxWidth: width }}
		>
			{children}
		</div>
	)
}
