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
import { useRouter } from "next/navigation"

export function LanguageToggle() {
    const router = useRouter();
  
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="ml-16" variant="outline" size="icon">
            <GlobeIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100" />
            <span className="sr-only">Choose language</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => router.push("/uk")}>
            Ukrainian
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => router.push('/en')}>
            English
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => router.push('/pl')}>
            Polish
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }
  