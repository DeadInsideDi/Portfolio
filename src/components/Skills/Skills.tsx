'use client'

import { SKILL_CARDS } from '@/config/cards.config'
import { type FC } from 'react'
import { CardsContainer, SkillCard } from '../Card/Card'
import { Container } from '../Container/Container'
import { Section } from '../Section/Section'

export const Skills: FC = () => {
	return (
		<Section id='skills'>
			<Container>
				<h2>My Skills</h2>
				<CardsContainer>
					{SKILL_CARDS.map(card => (
						<SkillCard
							key={card.title}
							{...card}
						/>
					))}
				</CardsContainer>
			</Container>
		</Section>
	)
}
