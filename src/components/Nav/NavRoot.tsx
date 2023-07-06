import { ReactNode } from "react"

interface NavRootProps {
  children:ReactNode
}

export function NavRoot({ children }: NavRootProps) {
  return (
    <nav className="border-t border-t-zinc-900 w-full h-12 text-zinc-700 bg-zinc-950 flex justify-between items-center">
      { children }
    </nav>
  )
}
