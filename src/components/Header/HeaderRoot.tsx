import { ReactNode } from "react";

interface HeaderRootProps {
  children: ReactNode
}

export function HeaderRoot({ children, ...props }: HeaderRootProps){
  return (
    <header className="w-full p-3 text-white flex gap-2 items-center " >
      { children }
    </header>
  )
}