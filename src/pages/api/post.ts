import { NextApiRequest, NextApiResponse } from "next";

export default function Post(req: NextApiRequest, res: NextApiResponse){
  const tweets = [
    { 
      author:"Alex",
      message:"Hello World!",
      key:"001"
    }
  ]

  res.send(tweets);
}