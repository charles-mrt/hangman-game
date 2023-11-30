interface ArmProps {
  is_border_color?: boolean
}

export const Arm = ({ is_border_color }: ArmProps) => {
  return (
    <div className={`w-2 h-10 mt-1 rounded-md border-2 ${is_border_color  ? 'border-red-500' : 'border-gray-800'}`}/>
  )
}



