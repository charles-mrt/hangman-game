interface RopeProps {
  margin?:string
}

export const Rope = ({margin}:RopeProps) => {
  return (
    <>
      <div className="w-1 h-1 bg-white rounded-full" />
      <div className={`w-1 h-1 bg-white rounded-full ${margin}`} />
      <div className={`w-1 h-1 bg-white rounded-full ${margin}`} />
      <div className="w-1 h-1 bg-white rounded-full" />
    </>
  )
}