interface HeadProps {
  is_border_color?: boolean
}

export const Head = ({ is_border_color}: HeadProps) => {
  
  return (
    <div className={`w-8 h-8 rounded-full border-2  ${is_border_color  ? 'border-red-500' : 'border-gray-800'}`}/>
  )
}