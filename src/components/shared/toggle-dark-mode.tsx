'use client'

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { MoonIcon, SunIcon } from 'lucide-react'
import { Button } from "../ui/button"

export default function ToggleDarkMode() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div>
      {theme === 'light' ? (
        <Button variant={'ghost'} size={'icon'} onClick={() => setTheme('dark')}>
          <MoonIcon className="size-5" />
        </Button>

      ) : (
        <Button variant={'ghost'} size={'icon'} onClick={() => setTheme('light')}>
          <SunIcon className="size-5" />
        </Button>
      )}
    </div>
  )
}

