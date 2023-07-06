import { UserCircle2, MoreHorizontal } from "lucide-react"
import { Send, MessageCircle } from "lucide-react"
import { Heart } from "phosphor-react"

interface TweetMessageProps {
  text:string;
  author:string;
} 

export function TweetMessage(props: TweetMessageProps){
  return (
    <div>
      <section className="py-2 flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <UserCircle2 className="text-zinc-200" size={ 28 } />
          <p className="text-zinc-400">{ String(props.author).toLowerCase() }</p>
        </div>
        <div>
          <MoreHorizontal size={22}/>
        </div>
      </section>
      <section className="px-1">
        <section>
          <h2>
            { props.text }
          </h2>
        </section>
        <section className="flex gap-2 py-2">
          <Heart size={ 20 } weight="bold"/>
          <MessageCircle size={ 20 }/>
          <Send size={ 19 }/>
        </section>
      </section>
    </div>
  )
}