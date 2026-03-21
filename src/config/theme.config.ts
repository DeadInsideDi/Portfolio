export const THEMES = {
	LIGHT: 'light',
	DARK: 'dark',
	SYSTEM: 'system',
} as const

export type Theme = (typeof THEMES)[keyof typeof THEMES]

export const THEMES_NAMES = {
	[THEMES.LIGHT]: 'Светлая',
	[THEMES.DARK]: 'Тёмная',
	[THEMES.SYSTEM]: 'Системная',
} as const
