'use client'

import { ExternalLinkIcon } from '@/assets'
import { PROJECTS } from '@/config/projects.config'
import type { FC } from 'react'
import { Container } from '../Container/Container'
import { Section } from '../Section/Section'
import s from './Projects.module.scss'

export type ProjectProps = {
	title: string
	description: string
	href: string
	imageUrl: string
	tags: string[]
}

export const Project: FC<ProjectProps> = ({
	title,
	description,
	href,
	imageUrl,
	tags,
}) => {
	return (
		<article>
			<div className={s.image}>
				<img
					src={imageUrl}
					alt={title}
					loading='lazy'
				/>
				<span>{tags[0]}</span>
			</div>

			<div className={s.content}>
				<h3>{title}</h3>
				<p>{description}</p>

				<div className={s.tags}>
					{tags.map(tag => (
						<span key={tag}>{tag}</span>
					))}
				</div>

				<a
					href={href}
					target='_blank'
					rel='noreferrer noopener'
				>
					<ExternalLinkIcon />
					View Live
				</a>
			</div>
		</article>
	)
}

export const Projects: FC = () => {
	return (
		<Section id='projects'>
			<Container>
				<h2>My Projects</h2>
				<div className={s.projects}>
					{PROJECTS.map(card => (
						<Project
							key={card.title}
							{...card}
						/>
					))}
				</div>
			</Container>
		</Section>
	)
}
