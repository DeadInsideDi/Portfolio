import type { ProjectProps } from '@/components/Projects/Projects'

export const PROJECTS: ProjectProps[] = [
	{
		title: 'KinGrid',
		description:
			'Интерактивное семейное древо: современный дизайн, совместное редактирование с родными и работа в облаке.',
		href: 'https://kingrid.vercel.app',
		imageUrl: '/projects/kingrid.webp',
		tags: ['Next.js', 'React', 'GSAP', 'TS', 'SCSS'],
	},
	{
		title: 'TicTacToe',
		description: 'Простые «Крестики-нолики» на React',
		href: 'https://tictactoe-frontend-azure.vercel.app',
		imageUrl: '/projects/tictactoe.webp',
		tags: ['React', 'Vite.js', 'Socket.io', 'TS', 'SCSS'],
	},
	{
		title: 'GMGO',
		description: 'Простая платформа для обмена медиаконтентом на Next.js.',
		href: 'https://gmgo.vercel.app',
		imageUrl: '/projects/gmgo.webp',
		tags: ['Next.js', 'React', 'TS', 'SCSS'],
	},
]
