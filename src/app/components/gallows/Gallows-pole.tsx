import { Head } from "./hangman-figure/Head"
import { Body } from "./hangman-figure/Body"
import { Arm } from "./hangman-figure/Arm"
import { Leg } from "./hangman-figure/Leg"
import { Rope } from "./rope/Rope"
import { useKeyContext } from "@/app/context/Key-provider"
import { useEffect, useState } from "react"
import { Box } from "./box/Box"


interface GallowsPoleProps {
  isError: boolean
}
export const GallowsPole = ({ isError }: GallowsPoleProps) => {

  const { clickedKey } = useKeyContext()
  const [count, setCount] = useState(7)


  const handleRemainingAttempts = () => {
    if (!isError) {
      setCount(count - 1)
    }
  }
  useEffect(() => {
    handleRemainingAttempts()
  }, [clickedKey, isError])

  return (
    <div className="h-2/3">
      <div className="w-36 h-52 ml-10 border-l-4 border-t-4 border-white flex justify-end">

        {/* man container */}
        <div className="w-14 translate-x-1/4">

          <div className={`${count === 0 && 'pendulum'} w-14 flex flex-col items-center `}>
            <div className="flex flex-col items-center mb-1 custom-transition">
              {count === 0 && <Rope />}
            </div>

            {count <= 0 ? <Head is_border_color={true} /> : <Head />}

            <div className="flex items-center">
              {count === 0 && <Rope margin="mt-1" />}
            </div>

            <div className="relative w-full flex flex-col items-center ">

              {count <= 5 ? <Body is_border_color={true} /> : <Body />}

              <div className="flex justify-between w-14 absolute top-0 left-0">
                <div className="rotate-6">
                  {count <= 4 ? <Arm is_border_color={true} /> : <Arm />}
                </div>
                <div className="-rotate-6">
                  {count <= 3 ? <Arm is_border_color={true} /> : <Arm />}

                </div>
              </div>

              <div className="flex gap-2">
                {count <= 2 ? <Leg is_border_color={true} /> : <Leg />}
                {count <= 1 ? <Leg is_border_color={true} /> : <Leg />}
              </div>
            </div>
          </div>

          {count <= 0
            ? (

              <div className='custom-rotate'>
                <Box />
              </div>

            ) : (
              <Box />
            )
          }
        </div>
      </div>
      <div className="w-48 h-1 bg-white" />
    </div>
  )
}