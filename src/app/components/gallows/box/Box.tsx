
export const Box = () => {
  return (
    <div className="w-14 h-16" >
      <div className="w-full h-full flex flex-col justify-between border-2 border-gray-950">
        
        <div className="w-full h-2 bg-gray-950 border-2 border-gray-800 m-0 p-0" />
        
        <div className="w-full h-full  bg-yellow-950  bg-opacity-20 relative">
          <div className="w-full h-2 bg-gray-950 border-2 border-gray-800 rotate-45 absolute top-0 bottom-0 m-auto" />
          <div className="w-full h-2 bg-gray-950 border-2 border-gray-800 -rotate-45 absolute top-0 bottom-0 m-auto" />
        </div>

        <div className="w-full h-2 bg-gray-950 border-2 border-gray-800 m-0 p-0" />

      </div>
    </div>
  )
}