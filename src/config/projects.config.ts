import type { ProjectProps } from '@/components/Projects/Projects'

export const PROJECTS: ProjectProps[] = [
	{
		title: 'KinGrid',
		description:
			'It is website for creating user intarective family tree with modern disign, adding relatives. Its all online and you can edit it with your family.',
		href: 'https://kingrid.vercel.app',
		imageUrl: '/projects/kingrid.webp',
		tags: ['Next.js', 'React', 'GSAP', 'TS', 'SCSS'],
	},
	{
		title: 'TicTacToe',
		description: 'A simple TicTacToe game built with React.',
		href: 'https://tictactoe-frontend-azure.vercel.app',
		imageUrl: '/projects/tictactoe.webp',
		tags: ['React', 'Vite.js', 'Socket.io', 'TS', 'SCSS'],
	},
	{
		title: 'GMGO',
		description: 'A simple media sharing platform built with Next.js.',
		href: 'https://gmgo.vercel.app',
		imageUrl: '/projects/gmgo.webp',
		tags: ['Next.js', 'React', 'TS', 'SCSS'],
	},
]
