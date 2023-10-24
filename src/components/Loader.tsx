const Loader = () => (
    <div className="overflow-hidden bg-white px-4 py-4 sm:px-6">
        <div className="animate-pulse flex space-x-4">
            <div className="rounded-full bg-slate-700 h-10 w-10"></div>
            <div className="flex-1 space-y-6 py-1">
                <div className="h-3 bg-slate-700 rounded w-1/4"></div>
                <div className="space-y-3">
                    <div className="h-3 bg-slate-700 rounded"></div>
                    <div className="grid grid-cols-3 gap-4">
                        <div className="h-3 bg-slate-700 rounded col-span-2"></div>
                    </div>

                </div>
            </div>
        </div>
    </div>
)

export default Loader