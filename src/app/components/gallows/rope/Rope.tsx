interface RopeProps {
  margin?:string
  bg_color?: string
}

export const Rope = ({margin, bg_color}:RopeProps) => {
  const background = bg_color === undefined ? 'bg-gray-800' : bg_color
  return (
    <>
      <div className={`w-1 h-1 ${background} rounded-full`} />
      <div className={`w-1 h-1 ${background} rounded-full ${margin}`} />
      <div className={`w-1 h-1 ${background} rounded-full ${margin}`} />
      <div className={`w-1 h-1 ${background} rounded-full`} />
    </>
  )
}