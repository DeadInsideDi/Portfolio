export const THEMES = {
	LIGHT: 'light',
	DARK: 'dark',
	SYSTEM: 'system',
} as const

export type Theme = (typeof THEMES)[keyof typeof THEMES]

export const THEMES_NAMES = {
	[THEMES.LIGHT]: 'Light',
	[THEMES.DARK]: 'Dark',
	[THEMES.SYSTEM]: 'System',
} as const
