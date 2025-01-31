import Image from 'next/image'
import icon from "../../../public/icon.png"
import { ModeToggle } from '../_modeToogle/modeToogle'

const navbar = () => {
  return (
    <nav className="flex items-center justify-between w-full px-4 py-5 border-b sm:px-6 md:px-7 lg:px-10">
      <div className="flex items-center space-x-4 sm:space-x-6">
        <div className="relative w-12 h-12 md:w-16 md:h-16">
          <Image 
            src={icon}
            alt="Icon"
            fill
            sizes="(max-width: 768px) 48px, (max-width: 1024px) 64px, 96px"
            className="object-cover"
          />
        </div>
        <h2 className="text-2xl sm:text-3xl font-semibold">Color picker</h2>
      </div>

      <ModeToggle />
    </nav>
  )
}

export default navbar
