
export default function Searchbar() {
    return (
        <div className="flex items-center gap-2 px-2 py-2 border border-slate-400 rounded-md">
            <input
                className="hidden bg-transparent outline-none placeholder:text-slate-400
                text-sm placeholder:font-medium lg:block "
                type="text"
                placeholder="Search"
            />
            <button className="flex items-center text-sm" type="submit">
                <span className="material-symbols-outlined">
                    search
                </span>
            </button>
        </div>
    )
}