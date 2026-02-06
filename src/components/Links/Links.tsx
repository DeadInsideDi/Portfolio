'use client'

import { LINK_CARDS } from '@/config/cards.config'
import { type FC } from 'react'
import { CardsContainer, LinkCard } from '../Card/Card'
import { Container } from '../Container/Container'
import { Section } from '../Section/Section'

export const Links: FC = () => {
	return (
		<Section id='links'>
			<Container>
				<h2>My Profiles</h2>
				<CardsContainer>
					{LINK_CARDS.map(card => (
						<LinkCard
							key={card.title}
							{...card}
						/>
					))}
				</CardsContainer>
			</Container>
		</Section>
	)
}
