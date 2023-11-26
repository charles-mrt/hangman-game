import { Key } from "./Key"

const keyBoardLetters = [
  'a', 'b', 'c', 'd', 'e',
  'f', 'g', 'h', 'i', 'j',
  'k', 'l', 'm', 'n', 'o',
  'p', 'q', 'r', 's', 't',
  'u', 'v', 'w', 'x', 'y', 'z'
]

export const KeyBoard = () => {
  return (
    <div className="w-full h-auto bg-indigo-700 rounded-md px-1 py-2">
      <ul className="w-full h-full flex flex-wrap gap-2 justify-center">
        {keyBoardLetters.map((KeyboardLetter, index) => (
          <li key={index} >
            <Key value={KeyboardLetter} />
          </li>
        ))}
      </ul>
    </div>
  )
}