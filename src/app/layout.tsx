"use client"

import "@/styles/globals.css"
import { useState, ReactNode, Fragment } from "react";
import { Nav } from "@/components/Nav/Index";
import { House, Heart, User } from "phosphor-react"
import { Search, Plus, MailboxIcon } from "lucide-react"
import { Header } from "@/components/Header/Index";
import { Home } from "@/components/PageComponents/Home";

interface RenderPageProps {
  pageName:  String,
  page: String
  Component: ReactNode
}

function RenderPage({ pageName, page, Component }: RenderPageProps){
  return (
    <Fragment>
      { pageName == page && Component}
    </Fragment>
  )
}

export default function RootLayout() {
  const [ page, setPage ] = useState("Home")
  return (
    <html lang="en">
      <body className="flex h-[100vh] flex-col items-end justify-center bg-zinc-950 ">
        <Header.Root>
          <MailboxIcon size={ 22 }/>
          <h1>Social</h1>
        </Header.Root>
        <main className="w-full h-[calc(100%_-_96px)]"> 
          <RenderPage page={ page } pageName="Home" Component={ <Home/> } />
        </main>
        <Nav.Root>
          <Nav.Icon  
            Actived   = { <House size={ 22 } weight="fill" className="text-white" /> }
            Disabled  = { <House size={ 22 } /> }
            Content   = { "Home" }
            Verify    = { page }
            setVerify = { setPage }
          />

          <Nav.Icon  
            Actived   = { <Search size={ 22 }  className="text-white"/> }
            Disabled  = { <Search size={ 22 } /> }
            Content   = { "Search" }
            Verify    = { page }
            setVerify = { setPage }
          />

          <Nav.Icon  
            Actived   = { <Plus size={ 22 }  className="text-white"/> }
            Disabled  = { <Plus size={ 22 } /> }
            Content   = { "Plus" }
            Verify    = { page }
            setVerify = { setPage }
          />

          <Nav.Icon  
            Actived   = { <Heart weight="fill" size={ 22 }  className="text-white"/> }
            Disabled  = { <Heart size={ 22 } /> }
            Content   = { "Heart" }
            Verify    = { page }
            setVerify = { setPage }
          />

          <Nav.Icon  
            Actived   = { <User weight="fill" size={ 22 }  className="text-white"/> }
            Disabled  = { <User size={ 22 } /> }
            Content   = { "User" }
            Verify    = { page }
            setVerify = { setPage }
          />
        </Nav.Root>
      </body>
    </html>
  );
}
