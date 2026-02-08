'use client'

import { ExternalLinkIcon } from '@/assets'
import { CONFIG } from '@/config/main.config'
import { cn } from '@/utils/clsx'
import { type FC } from 'react'
import s from './Contacts.module.scss'

type ContactsProps = {
	className?: string
}
export const Contacts: FC<ContactsProps> = ({ className }) => {
	return (
		<ul className={cn(className, s.contacts)}>
			<li>
				<a
					href={`mailto:${CONFIG.email}`}
					target='_blank'
					rel='noreferrer noopener'
				>
					<ExternalLinkIcon />
					Mail
				</a>
			</li>

			<li>
				<a
					href={CONFIG.telegram}
					target='_blank'
					rel='noreferrer noopener'
				>
					<ExternalLinkIcon />
					Telegram
				</a>
			</li>
			<li>
				<a
					href={`tel:${CONFIG.phone}`}
					target='_blank'
					rel='noreferrer noopener'
				>
					<ExternalLinkIcon />
					{CONFIG.phone}
				</a>
			</li>
		</ul>
	)
}
