import { ReactNode } from "react"

interface TweetRootProps {
  children: ReactNode
}

export function TweetRoot({ children }: TweetRootProps){
  return (
    <div className="p-2 border-b border-b-zinc-900">
      { children }
    </div>
  )
}