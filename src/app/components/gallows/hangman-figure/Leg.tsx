interface LegProps {
  is_border_color?: boolean
}

export const Leg = ({ is_border_color }: LegProps) => {
  return (
    <div className={`w-2 h-11  mt-1 rounded-md border-2 ${is_border_color ? 'border-red-500' : 'border-gray-800'}`} />
  )
}