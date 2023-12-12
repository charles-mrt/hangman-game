import { GithubIcon } from "lucide-react"
import Link from "next/link"

export const Footer = () => {
  return (
    <footer className="w-full bg-slate-950 flex items-center justify-between p-2 mt-2">
      <Link href="https://github.com/charles-mrt/hangman-game" target='_blank' rel="noreferrer noopener">
        <GithubIcon  className="text-white hover:text-indigo-500"/>
      </Link>
      <span className="text-sm text-gray-400">Developed with 🖤 by Charles</span>
      <span className="text-sm text-gray-700">v 1.0.0</span>
    </footer>
  )
}