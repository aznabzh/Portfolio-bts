'use client'

import { useEffect, useState } from 'react'
import { Monitor, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

type ThemeOption = 'light' | 'dark' | 'system'

const themeOptions: Array<{
  value: ThemeOption
  label: string
  description: string
}> = [
  { value: 'light', label: 'Clair', description: 'Thème lumineux' },
  { value: 'dark', label: 'Sombre', description: 'Confort nocturne' },
  { value: 'system', label: 'Système', description: 'Suit les préférences OS' },
]

export function ThemeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const selectedTheme: ThemeOption = mounted
    ? ((theme as ThemeOption | undefined) ?? 'system')
    : 'system'

  const Icon = !mounted
    ? Monitor
    : selectedTheme === 'system'
      ? Monitor
      : resolvedTheme === 'dark'
        ? Moon
        : Sun

  const accessibleLabel = !mounted
    ? 'Choisir le thème'
    : selectedTheme === 'system'
      ? 'Thème système'
      : resolvedTheme === 'dark'
        ? 'Thème sombre'
        : 'Thème clair'

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="h-9 w-9 rounded-lg text-muted-foreground hover:text-foreground"
          aria-label={accessibleLabel}
          title={accessibleLabel}
        >
          <Icon className="h-4 w-4" />
          <span className="sr-only">{accessibleLabel}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-44">
        <DropdownMenuLabel>Apparence</DropdownMenuLabel>
        <DropdownMenuRadioGroup
          value={selectedTheme}
          onValueChange={(value) => setTheme(value)}
        >
          {themeOptions.map((option) => (
            <DropdownMenuRadioItem key={option.value} value={option.value}>
              <div className="flex flex-col">
                <span>{option.label}</span>
                <span className="text-xs text-muted-foreground">
                  {option.description}
                </span>
              </div>
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
