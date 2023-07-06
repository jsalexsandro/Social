import { ReactNode } from "react";

interface NavIconProps {
  Actived:ReactNode
  Disabled:ReactNode
  Content: String, 
  Verify: String,
  setVerify: (e: any) => any
}

export function NavIcon({ Actived, Disabled, ...props }: NavIconProps){
  return (
    <div onClick={ () => props.setVerify(props.Content) } className="w-12 h-12 flex justify-center items-center text-">
      { props.Verify == props.Content && Actived }
      { props.Verify != props.Content && Disabled }
    </div>
  )
}