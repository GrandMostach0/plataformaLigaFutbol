function Acordion({ title, children, isOpen, onClick}) {

    return(
        <div className=" border-b border-b-slate-300 py-2">
            <button
                onClick={onClick}
                className="w-full text-left py-2 font-semibold hover:underline cursor-pointer"
            >
                { title }
            </button>
            {isOpen && (
                <div className="text-gray-600 text-pretty">
                    {children}
                </div>
            )}

        </div>
    )
}

export default Acordion;