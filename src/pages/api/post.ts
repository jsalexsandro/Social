import { NextApiRequest, NextApiResponse } from "next";

export default function Post(req: NextApiRequest, res: NextApiResponse){
  const tweets = [
    { 
      author:"Alex",
      message:"Isso é um simples teste para saber, como se comporta em diferentes telas!",
      key:"001"
    }
  ]

  res.send(tweets);
}