"use client"

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface ColorInputProps {
  selectedColor: string
  onColorChange: (color: string) => void
}

const ColorInput = ({ selectedColor, onColorChange }: ColorInputProps) => {
  const [format, setFormat] = useState<"HEX" | "HSL">("HEX")

  return (
    <div className="relative w-full max-w-md mx-auto">
      <Input
        type="text"
        value={selectedColor}
        onChange={(e) => onColorChange(e.target.value)}
        placeholder={format === "HEX" ? "#4f91e8" : "hsl(210, 75%, 60%)"}
        className="py-7 rounded-full pl-14 pr-24 placeholder:text-md"
      />
      <span
        className="absolute left-6 top-1/2 transform -translate-y-1/2 w-7 h-7 rounded-full"
        style={{ backgroundColor: selectedColor }}
      />
      <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="rounded-full bg-background hover:bg-gray-100"
            >
              {format}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" sideOffset={5}>
            <DropdownMenuItem onClick={() => setFormat("HEX")}>
              HEX
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setFormat("HSL")}>
              HSL
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}

export default ColorInput
