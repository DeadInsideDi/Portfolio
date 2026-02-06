import {
	AxiosIcon,
	CssBattleIcon,
	FigmaIcon,
	FsdIcon,
	GithubIcon,
	HabrIcon,
	HHRuIcon,
	LeetCodeIcon,
	NextJsIcon,
	ReactIcon,
	SassIcon,
	SocketIoIcon,
	TailwindIcon,
	TanStackIcon,
	TypeScriptIcon,
	ViteIcon,
	ZustandIcon,
} from '@/assets'
import type { LinkCardProps, SkillCardProps } from '@/components/Card/Card'

export const SKILL_CARDS: SkillCardProps[] = [
	{
		icon: NextJsIcon,
		title: 'Next.js',
		description:
			'Building server-rendered React applications with Next.js for optimal performance and SEO.',
		iconColor: 'var(--text-primary)',
	},
	{
		icon: ViteIcon,
		title: 'Vite.js',
		description:
			'Building fast and optimized applications with Vite.js for seamless development experience.',
		iconColor: '#8e39ff',
	},
	{
		icon: ReactIcon,
		title: 'React',
		description:
			'Building dynamic, component-based UIs with modern React hooks, context API, and state management solutions.',
		iconColor: '#58c4dc',
	},
	{
		icon: FigmaIcon,
		title: 'Figma',
		description:
			'Have a experience with figma as a developper and a little bit of design.',
		iconColor: 'var(--text-primary)',
	},
	{
		icon: TypeScriptIcon,
		title: 'TypeScript',
		description:
			'Developing type-safe applications with TypeScript to ensure code reliability and maintainability.',
		iconColor: '#3178c6',
	},
	{
		icon: SassIcon,
		title: 'Sass',
		description:
			'Creating maintainable, modular styles with SCSS preprocessor. Fan of mixins, variables, and functions.',
		iconColor: '#cf649a',
	},
	{
		icon: TailwindIcon,
		title: 'Tailwind',
		description:
			'Building modern, fast in development applications with Tailwind CSS.',
		iconColor: '#00bcff',
	},
	{
		icon: SocketIoIcon,
		title: 'Socket.io',
		description:
			'Building real-time applications with Socket.io for efficient and scalable communication between clients and servers.',
		iconColor: 'var(--text-primary)',
	},
	{
		icon: FsdIcon,
		title: 'FSD',
		description:
			'Creating Feature-Sliced Disign projects ensure a clean and organized codebase.',
		iconColor: '#4294e6',
	},
	{
		icon: ZustandIcon,
		title: 'Zustand',
		description:
			'Managing application state with Zustand for efficient and predictable state management.',
		iconColor: '#ad9686',
	},
	{
		icon: TanStackIcon,
		title: 'TanStack',
		description:
			'Wonderful async state manager with robust features and a simple hooks.',
		iconColor: 'var(--text-primary)',
	},
	{
		icon: AxiosIcon,
		title: 'Axios',
		description:
			'Making HTTP requests with Axios for efficient and reliable data fetching.',
		iconColor: '#5a29e4',
	},
]

export const LINK_CARDS: LinkCardProps[] = [
	{
		icon: GithubIcon,
		title: 'GitHub',
		description: 'Check out my projects, activity, and code repositories.',
		href: 'https://github.com/DeadInsideDi',
		iconColor: 'var(--text-primary)',
	},
	{
		icon: LeetCodeIcon,
		title: 'LeetCode',
		description:
			'View my algorithm problem-solving progress and coding challenges.',
		href: 'https://leetcode.com/u/matvei3000',
		iconColor: '#ffa116',
	},
	{
		icon: CssBattleIcon,
		title: 'CSS Battle',
		description: 'View my CSS battle progress and challenges.',
		href: 'https://cssbattle.dev/player/matvei',
		iconColor: '#ffdf00',
	},
	{
		icon: HabrIcon,
		title: 'Habr',
		description: 'View my activity on Habr.',
		href: 'https://habr.com/ru/users/Matvei3000/',
		iconColor: 'var(--text-primary)',
	},
	{
		icon: HHRuIcon,
		title: 'HH.RU',
		description:
			'View my activity on hh.ru where I registered as a Fullstack developer.',
		href: 'https://samara.hh.ru/resume/39bb67e7ff0f16b9180039ed1f736d676d696f',
		iconColor: '#ff0002',
	},
]
