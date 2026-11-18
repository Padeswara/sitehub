import React from 'react'
import { Sun, Moon } from 'lucide-react'

export function Navbar({ 
  theme = 'light', 
  onToggleTheme 
}) {
  return (
    <header className="glass-panel sticky top-0 z-40 border-b border-slate-200/80 dark:border-white/10 backdrop-blur-2xl">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 gap-2">
          
          {/* Brand Wordmark: SiteHub (Dual Font, No Logo Image) */}
          <div className="flex items-baseline min-w-0 select-none">
            <span className="font-brand-site font-bold text-slate-900 dark:text-white tracking-tight text-xl sm:text-2xl leading-none">
              Site
            </span>
            <span className="font-brand-hub font-bold italic text-blue-600 dark:text-blue-400 text-xl sm:text-2xl leading-none ml-0.5">
              Hub
            </span>
          </div>

          {/* Right: Theme Switcher */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {onToggleTheme && (
              <button
                type="button"
                onClick={onToggleTheme}
                className="p-1.5 sm:p-2 glass-btn-secondary rounded-xl transition cursor-pointer active:scale-95 flex items-center justify-center"
                title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                aria-label="Toggle theme mode"
              >
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4 text-amber-300 opacity-100 transition-transform duration-300 rotate-0 hover:rotate-45" />
                ) : (
                  <Moon className="w-4 h-4 text-indigo-600 opacity-100 transition-transform duration-300 rotate-0 hover:-rotate-12" />
                )}
              </button>
            )}
          </div>

        </div>
      </div>
    </header>
  )
}
