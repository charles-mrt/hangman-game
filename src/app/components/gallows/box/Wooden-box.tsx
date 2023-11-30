import { WoodenSlat } from "./Wooden-slat"

export const WoodenBox = () => {
  return (
    <div className="w-14 h-12" >
      <div className="w-full h-full relative bg-yellow-950 bg-opacity-20">
        <WoodenSlat width="2" height="full" left={0} />
        <WoodenSlat width="2" height="full" right={0} />
        
        <WoodenSlat width="full" height="2" top={0} bottom={0} rotate={45} />
        
        <WoodenSlat width="full" height="2" bottom={0} />
        <WoodenSlat width="full" height="2" top={0} />

      </div>
    </div>
  )
}