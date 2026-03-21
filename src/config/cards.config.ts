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
			'Создаю серверные приложения на Next.js для максимальной производительности и SEO.',
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
			'Разрабатываю надежные приложения на TypeScript с упором на типизированный код.',
		iconColor: '#3178c6',
	},
	{
		icon: SassIcon,
		title: 'Sass',
		description:
			'Создаю стили на SCSS. Эффективно использую миксины, переменные и функции.',
		iconColor: '#cf649a',
	},
	{
		icon: TailwindIcon,
		title: 'Tailwind',
		description:
			'Работал с Tailwind CSS: быстрая и простая разработка для маленьких проектов.',
		iconColor: '#00bcff',
	},
	{
		icon: SocketIoIcon,
		title: 'Socket.io',
		description:
			'Разрабатываю real-time приложения на Socket.io для быстрого и масштабируемого обмена данными.',
		iconColor: 'var(--text-primary)',
	},
	{
		icon: FsdIcon,
		title: 'FSD',
		description:
			'Разрабатываю проекты по методологии FSD для обеспечения чистоты и четкой структуры кода.',
		iconColor: '#4294e6',
	},
	{
		icon: ZustandIcon,
		title: 'Zustand',
		description:
			'Управляю состоянием через Zustand: эффективно, предсказуемо и просто.',
		iconColor: '#ad9686',
	},
	{
		icon: TanStackIcon,
		title: 'TanStack',
		description:
			'Отличный асинхронный стейт-менеджер с мощным функционалом и простыми хуками.',
		iconColor: 'var(--text-primary)',
	},
	{
		icon: AxiosIcon,
		title: 'Axios',
		description: 'Использую Axios для надежных и эффективных HTTP-запросов.',
		iconColor: '#5a29e4',
	},
]

export const LINK_CARDS: LinkCardProps[] = [
	{
		icon: GithubIcon,
		title: 'GitHub',
		description: 'Посмотрите мои проекты, активность и код.',
		href: 'https://github.com/DeadInsideDi',
		iconColor: 'var(--text-primary)',
	},
	{
		icon: LeetCodeIcon,
		title: 'LeetCode',
		description: 'Мой прогресс в алгоритмах и решении задач.',
		href: 'https://leetcode.com/u/matvei3000',
		iconColor: '#ffa116',
	},
	{
		icon: CssBattleIcon,
		title: 'CSS Battle',
		description: 'Мой прогресс и решения в CSS Battle.',
		href: 'https://cssbattle.dev/player/matvei',
		iconColor: '#ffdf00',
	},
	{
		icon: HabrIcon,
		title: 'Habr',
		description: 'Моя активность на Habr.',
		href: 'https://habr.com/ru/users/Matvei3000/',
		iconColor: 'var(--text-primary)',
	},
	{
		icon: HHRuIcon,
		title: 'HH.RU',
		description: 'Профиль на hh.ru: мой опыт и резюме Fullstack-разработчика.',
		href: 'https://samara.hh.ru/resume/39bb67e7ff0f16b9180039ed1f736d676d696f',
		iconColor: '#ff0002',
	},
]
