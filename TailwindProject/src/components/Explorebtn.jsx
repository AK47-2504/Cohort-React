

const Explorebtn = () => {
  return (
    <div className={`flex items-center `}>
      <div className="w-10 h-10 bg-zinc-500 border border-gray-300 rounded-full flex items-center justify-center hover:bg-orange-600 hover:border-orange-600 transition cursor-pointer">
      <i className="ri-arrow-right-up-line text-2xl"></i>
      </div>

      <button className="text-sm font-mono sm:text-base md:text-lg  px-4 py-2">
        Explore
      </button>
    </div>
  )
}

export default Explorebtn
