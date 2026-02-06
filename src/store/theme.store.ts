import { THEMES, type Theme } from '@/config/theme.config'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface ThemeState {
	theme: Theme
	setTheme: (theme: Theme) => void
}

export const useThemeStore = create<ThemeState>()(
	persist(
		set => ({
			theme: THEMES.SYSTEM,
			setTheme: (theme: Theme) => set({ theme }),
		}),
		{
			name: 'theme-storage',
		},
	),
)
