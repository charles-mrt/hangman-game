interface BodyProps {
  is_border_color?: boolean
}
export const Body = ({ is_border_color }: BodyProps) => {
  return (
    <div className={`w-8 h-10  mt-1 rounded-md border-2 ${is_border_color ? 'border-red-500' : 'border-gray-800'}`} />
  )
}
