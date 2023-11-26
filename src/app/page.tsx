import Image from 'next/image'
import { Header } from './components/Header'
import { KeyBoard } from './components/Keyboard'
import { GameHeader } from './components/Game-header'
import { GallowsPole } from './components/gallows/Gallows-pole'
import { WordField } from './components/word/Word-field'

export default function Home() {
  return (
    <main className="w-screen h-screen">

      <div className="max-w-[430px] max-h-[932px] w-full h-full bg-slate-900 flex flex-col justify-between">

        <Header />

        <div className="h-full p-5 flex flex-col gap-6 justify-between">

          <div className="w-full flex flex-col justify-between gap-10">
            <GameHeader />
            <GallowsPole />            
            <WordField totalField={15} />            
          </div>

          <KeyBoard />
          
        </div>

      </div>
    </main>
  )
}
