import { useEffect, useState } from "react"
import Axios from "axios"
import { Tweet } from "../Tweet/Index"

type TweetTYPE = {
  author: string
  message: string
  key:string
}

export function Home(){
  const [tweets, setTweets] = useState<TweetTYPE[]>([])

  async function getTweets(){
    const tweets = await (await Axios.get("/api/post")).data
    console.log(tweets)
    setTweets(tweets)
  }

  useEffect(() => {
    getTweets()
  }, [])

  return (
    <div className="text-white">
     { tweets.map((tweet) => (
        <Tweet.Root key={ tweet.key }>
          <Tweet.Message author={ tweet.author } text={ tweet.message } />
        </Tweet.Root> 
     ))}
    </div>
  )
}