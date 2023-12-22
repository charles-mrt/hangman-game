import { KeyProvider } from './context/Key-provider'
import { KeyBoard } from './components/Keyboard'
import { WordField } from './components/word/Word-field'
import { Footer } from './components/Footer'

export default function Home() {
  return (
    <main className="w-screen h-screen">
      <div className="max-w-[430px] max-h-[932px] w-full h-full bg-gray-950 flex flex-col justify-between items-center">
        <KeyProvider>
          <WordField />
          <KeyBoard />
        </KeyProvider>
        <Footer />
      </div>
    </main>
  )
}
