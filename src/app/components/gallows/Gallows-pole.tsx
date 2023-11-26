import { Head } from "./hangman-figure/Head"
import { Body } from "./hangman-figure/Body"
import { Arm } from "./hangman-figure/Arm"
import { Leg } from "./hangman-figure/Leg"
import { Rope } from "./rope/Rope"

export const GallowsPole = () => {
  return (
    <div className="h-2/3 relative">
      <div className="w-36 h-52 ml-10 border-l-4 border-t-4 border-white flex justify-end">

        {/* man container */}
        <div className="w-14 flex flex-col items-center translate-x-1/4">

          <div className="flex flex-col items-center mb-1">
            <Rope />
          </div>
          
          <Head />

          <div className="flex items-center">
            <Rope margin="mt-1" />
          </div>

          <div className="relative w-full flex flex-col items-center ">
            
            <Body />

            <div className="flex justify-between w-14 absolute top-0 left-0">
              <div className="rotate-6"><Arm /></div>
              <div className="-rotate-6"><Arm /></div>
            </div>

            <div className="flex gap-2">
              <Leg />
              <Leg />
            </div>

          </div>

        </div>

      </div>
      <div className="w-48 h-1 bg-white" />

      <div className="absolute top-0 right-0 w-12 h-12 bg-green-400 rounded-md text-white text-2xl uppercase font-bold flex items-center justify-center">
        A
      </div>

    </div>
  )
}