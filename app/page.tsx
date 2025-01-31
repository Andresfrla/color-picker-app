"use client"
import { useState } from "react"
import Navbar from "./_components/_navbar/navbar"
import RadioColor from "./_components/_radioColor/radioColor"
import ColorInput from "./_components/ColorInput/ColorInput"
import ColorVariationCards from "./_components/ColorVariation/ColorVariation"

export default function Home() {
  const [selectedColor, setSelectedColor] = useState("#4f91e8")

  return (
    <div className="flex justify-center items-center flex-col px-4">
      <Navbar />

      <div className="flex items-center justify-center flex-col space-y-5 mt-10 text-center">
        <h1 className="text-7xl font-semibold mt-18 items-center text-center">
          Tailwind CSS
        </h1>
        <h3 className="text-4xl">Color Palette Generator</h3>
        <p className="text-xl w-1/2 pb-20">
          Pick a color, enter a hexcode or change the HSL values to create a color palette
        </p>
        
        <ColorInput 
          selectedColor={selectedColor}
          onColorChange={setSelectedColor}
        />

        <RadioColor />
        <ColorVariationCards />
      </div>
    </div>
  )
}