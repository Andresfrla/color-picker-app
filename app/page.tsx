"use client"
import { useState } from "react"
import Navbar from "./_components/_navbar/navbar"
import RadioColor from "./_components/_radioColor/radioColor"
import ColorInput from "./_components/ColorInput/ColorInput"
import ColorVariationCards from "./_components/ColorVariation/ColorVariation"
import { ChartExample } from "./_components/Chart/Chart"
import { CardExample } from "./_components/CardExample/CardExample"
import { CalendarExample } from "./_components/CalendarExample/CalendarExample"
import { LoginForm } from "@/components/login-form"
import ButtonTypes from "./_components/ButtonTypes/ButtonTypes"
import CardWithPicture from "./_components/CardWithPicture/CardWithPicture"
import CardWithPicture2 from "./_components/CardWithPicture1/CardWithPicture2"
import SubscriptionCard from "./_components/SubscriptionCard/SubscriptionCard"
import CustomSeparator from "./_components/Separator/Separator"




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
        <h4 className="pt-10 text-3xl">Examples: </h4>
        <div className="min-h-screen w-full flex items-center justify-center">
          <div className="grid h-full w-full grid-cols-4 grid-rows-2 gap-3 items-center">
            <div className="col-span-2 row-span-1">
              <ChartExample /> 
            </div>
            <div className="col-span-1 row-span-1">
              <CardExample />
            </div>
            <div className="col-span-1 row-span-1">
              <CardWithPicture />
            </div>

            <div className="col-span-1 row-span-1">
              <CardWithPicture2 />
              
            </div>
            <div className="col-span-1 row-span-1">
              <LoginForm />
            </div>
            <div className="col-span-1 row-span-1 space-y-5">
              <ButtonTypes/>   
              <SubscriptionCard/>   
            </div>
            <div className="col-span-1 row-span-1">
              <div className="flex flex-col items-center justify-center space-y-5">
                <CalendarExample />
                <CustomSeparator />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}