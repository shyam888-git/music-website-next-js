
export default function Home(){

  return(
    <main className="p-5">
      <h1 className="text-center text-lg text-green-400">Tailwind Css</h1>
    <div className="w-full h-10 px-24 bg-violet-200 border-violet-600 rounded-md my-4 p-2">
      <p className="text-center font-mono font-extrabold">Div</p>
    </div>
     {/* layout */}
    <div className="fixed w-10 h-10 bg-red-500 top-0 left-5 right-5 bottom-4"></div>


    {/* flex */}
    <div className="flex justify-around gap-11">
      <div className="h-16 w-16 bg-blue-600 rounded-full "></div>
      <div className="h-16 w-16 bg-blue-600 rounded-full "></div>
      <div className="h-16 w-16 bg-blue-600 rounded-full "></div>
      <div className="h-16 w-16 bg-blue-600 rounded-full "></div>
      <div className="h-16 w-16 bg-blue-600 rounded-full "></div>

    </div>

    {/* grid */}

    <div className="grid pt-4 grid-cols-5 gap-4">
      <div className="h-10 bg-violet-500"></div>
      <div className="h-10 bg-violet-500"></div>
      <div className="h-10 bg-violet-500"></div>
      <div className="h-10 bg-violet-500"></div>
      <div className="h-10 bg-violet-500"></div>
      <div className="h-10 bg-violet-500"></div>


    </div>

     <div className="md:block hidden ">
      <p>I will learn tailwind css fully</p>
     </div>

     <div className="max-md:block hidden">
      <p>I will learn tailwind css more fully</p>
     </div>

     <button className="bg-blue-400 px-4 py-2 rounded-md text-white cursor-pointer hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300  active:bg-blue-800 ">Click Me</button>

      <ul className="my-2 space-y-2">
        <li className="bg-white mt-4 p-2 first:bg-yellow-100 ">Item1</li>
        <li className="bg-white p-2 first:bg-yellow-100 even:bg-green-200 odd:bg-blue-500 ">
          Item 2
        </li>
        <li className="bg-white p-2 first:bg-yellow-100 even:bg-green-200 odd:bg-blue-500">
          Item3
        </li>
        <li className="bg-white p-2 first:bg-yellow-100 even:bg-red-500 odd:bg-blue-600">Item 4</li>

      </ul>
    </main>
  )

}