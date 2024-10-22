export default function Grid(){
    return(
        <div> <br /> <br />

        <h1 className="text-center font-extrabold font-serif text-3xl">GRID</h1>
            <div className="grid grid-cols-4 grid-rows-3 gap-2 h-44">

                <div className="row-span-3 bg-slate-800 h-44"></div>
                <div className="col-span-2 bg-red-950"></div>
                <div className="row-span-1 h-20 bg-orange-600"></div>
                <div className="bg-amber-500"></div>
                <div className="bg-red-400  "></div>
                <div className="rows-span-2 h-20 bg-lime-950 mt-8" ></div>
                <div className="bg-sky-950"></div>
                <div className="bg-blue-900 "></div>
            </div>
        </div>
    )
}