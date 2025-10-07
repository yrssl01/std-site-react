import React from 'react'

const Loading = () => {
  return (
    <div className="w-full flex items-center justify-center h-screen mt-20">
      <div className="animate-spin h-10 w-10">
        <div className="h-full w-full border-4 border-t-[#26bbff] border-gray-300 rounded-full"></div>
      </div>
    </div>
  )
}

export default Loading
