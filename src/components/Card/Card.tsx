'use client'

import { cn } from '@/utils/clsx'
import { type FC, type PropsWithChildren } from 'react'
import s from './Card.module.scss'

export type CardProps = {
	title: string
	description: string
	icon: React.FC<React.SVGProps<SVGSVGElement>>
	iconColor?: string
}

export type SkillCardProps = CardProps

export type LinkCardProps = CardProps & {
	href: string
}

export const SkillCard: FC<SkillCardProps> = card => {
	return (
		<div className={s.skillCard}>
			<card.icon style={{ color: card.iconColor }} />
			<h3>{card.title}</h3>
			<p>{card.description}</p>
		</div>
	)
}

export const LinkCard: FC<LinkCardProps> = card => {
	return (
		<a
			href={card.href}
			target='_blank'
			rel='noreferrer noopener'
			className={s.linkCard}
		>
			<card.icon style={{ color: card.iconColor }} />
			<h3>{card.title}</h3>
			<p>{card.description}</p>
		</a>
	)
}

type CardsContainerProps = PropsWithChildren<unknown> & {
	className?: string
}
export const CardsContainer: FC<CardsContainerProps> = ({
	children,
	className,
}) => {
	return <div className={cn(className, s.cards)}>{children}</div>
}
