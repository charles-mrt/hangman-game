
interface WoodenPlankProps {
  width: string
  height: string
  left?: string
  right?: string
  top?: string
  bottom?: string
  rotate?: string
}

export const WoodenSlat = ({ ...props }: WoodenPlankProps) => {
  return (
    <div className={`
      ${props.width} 
      ${props.height} 
      absolute 
      m-auto 
      ${props.left}
      ${props.right} 
      ${props.top} 
      ${props.bottom} 
      ${props.rotate}
      border-2  
     border-gray-800 
     bg-gray-950`} 
    />
  )
}
