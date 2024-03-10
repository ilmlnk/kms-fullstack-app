"use client"

import * as React from "react"
import { GlobeIcon, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function LanguageToggle() {
    const { setTheme } = useTheme();
  
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="ml-16" variant="outline" size="icon">
            <GlobeIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100" />
            <span className="sr-only">Choose language</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setTheme("light")}>
            Ukrainian
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("dark")}>
            English
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("system")}>
            Polish
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }
  