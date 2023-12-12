import { Rope } from "./rope/Rope"
import { Head } from "./hangman-figure/Head"
import { Body } from "./hangman-figure/Body"
import { Arm } from "./hangman-figure/Arm"
import { Leg } from "./hangman-figure/Leg"
import { WoodenBox } from "./box/Wooden-box"

import { useAudio } from "@/app/use-audio"

interface GallowsPoleProps {
  life: number
  playerWins: boolean
}
export const GallowsPole = ({ life, playerWins }: GallowsPoleProps) => {

  const {playerLose, playerWin  } = useAudio()
  
  if (life === 0) playerLose()
  if (playerWins) playerWin()


  return (
    <div className="h-2/3">
      <div className="w-36 h-52 ml-10 border-l-4 border-t-4 border-white flex justify-end relative">
        <div className="h-12 rotate-45 absolute left-3 -top-2 border-2 border-white bg-white" />
        {/* man container */}
        {playerWins ? (
          <div className="w-14 translate-x-1/4 mt-6 relative">
            <div className="w-14 flex flex-col items-center custom-jump">
              <Head />

              <div className="relative w-full flex flex-col items-center ">

                <Body />

                <div className="flex justify-between w-14 absolute -top-6 left-0">
                  <div className="relative">
                    <div className="rotate-[135deg]">
                      <Arm />
                    </div>
                    <div className="flex flex-col items-center absolute top-4 -left-4 pendulum">
                      <Rope bg_color="bg-white" />
                      <Rope bg_color="bg-white" />
                      <div className="w-6 h-8 rounded-full border-2 border-white" />
                    </div>
                  </div>

                  <div className="-rotate-[135deg]">
                    <Arm />
                  </div>
                </div>

                <div className="flex gap-2">
                  <Leg />
                  <Leg />
                </div>
              </div>
            </div>
            <div className="absolute bottom-0"><WoodenBox /></div>
          </div>
        ) : (

          <div className="w-14 translate-x-1/4">

            <div className={`${life === 0 && 'pendulum'} w-14 flex flex-col items-center`}>
              <div className="flex flex-col items-center mb-1 custom-transition">
                {life === 0 ? <Rope bg_color="bg-white" /> : <Rope />}
              </div>

              {life <= 0 ? <Head is_border_color={true} /> : <Head />}

              <div className="flex items-center">
                {life === 0
                  ? <Rope bg_color="bg-white" margin="mt-1" />
                  : <Rope margin="mt-1" />}
              </div>

              <div className="relative w-full flex flex-col items-center ">

                {life < 6 ? <Body is_border_color={true} /> : <Body />}

                <div className="flex justify-between w-14 absolute top-0 left-0">
                  <div className="rotate-6">
                    {life <= 4 ? <Arm is_border_color={true} /> : <Arm />}
                  </div>
                  <div className="-rotate-6">
                    {life <= 3 ? <Arm is_border_color={true} /> : <Arm />}

                  </div>
                </div>

                <div className="flex gap-2">
                  {life <= 2 ? <Leg is_border_color={true} /> : <Leg />}
                  {life <= 1 ? <Leg is_border_color={true} /> : <Leg />}
                </div>
              </div>
            </div>

            {life <= 0
              ? (

                <div className='custom-rotate'>
                  <WoodenBox />
                </div>

              ) : (
                <WoodenBox />
              )
            }
          </div>
        )}
      </div>
      <div className="w-48 h-1 bg-white" />
    </div>
  )
}