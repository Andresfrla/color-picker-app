import Image from 'next/image'
import icon from "../../../public/icon.png"
import { ModeToggle } from '../_modeToogle/modeToogle'

const navbar = () => {
  return (
    <nav className="flex items-center mb-20 space-x-10 justify-between w-full px-7 border-b py-5 sm:py-2">
        <div className="flex items-center">
          <div className="relative w-10 h-10 md:w-14 md:h-14">
            <Image 
              src={icon}
              alt="Icon"
              fill
              sizes="(max-width: 768px) 64px, 96px"
              className="object-cover"
            />
          </div>
        <h2 className="text-3xl ml-5 font-semibold">Color picker</h2>
      </div>

      <ModeToggle />
    </nav>
  )
}

export default navbar