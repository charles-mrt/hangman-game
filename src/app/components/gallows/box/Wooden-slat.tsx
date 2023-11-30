
interface WoodenPlankProps {
  width: string
  height: string
  left?: number
  right?: number
  top?: number
  bottom?: number
  rotate?: number
}

export const WoodenSlat = ({ ...props }: WoodenPlankProps) => {
  return (
    <div className=
      {`
        w-${props.width} 
        h-${props.height}
        absolute 
        m-auto  
        left-${props.right} 
        right-${props.left}
        top-${props.top} 
        bottom-${props.bottom}
        border-2
        rotate-${props.rotate}
       border-gray-800  
       bg-gray-950 
     `}
    />
  )
}
