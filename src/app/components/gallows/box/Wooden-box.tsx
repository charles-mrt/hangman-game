import { WoodenSlat } from "./Wooden-slat"

export const WoodenBox = () => {
  return (
    <div className="w-14 h-12" >
      <div className="w-full h-full relative bg-yellow-950 bg-opacity-20">
        <WoodenSlat width="w-2" height="h-full" left="left-0" />       
        <WoodenSlat width="w-2" height="h-full" right="right-0" />
        
        <WoodenSlat width="w-full" height="h-2" top="top-0" bottom="bottom-0" rotate="rotate-45" />
        
        <WoodenSlat width="w-full" height="h-2" top="top-0" />  
        <WoodenSlat width="w-full" height="h-2" bottom="bottom-0" />      
      </div>
    </div>
  )
}