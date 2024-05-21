
export default function Searchbar() {
    return (
        <div className="flex items-center gap-2 px-2 py-2 border-slate-400 rounded-md lg:border">
            <input
                className="bg-transparent outline-none placeholder:text-slate-400
                text-sm placeholder:font-medium hidden lg:block"
                type="text"
                placeholder="Search"
            />
            <button className="flex items-center text-sm" type="submit">
                <span class="material-symbols-outlined">
                    search
                </span>
            </button>
        </div>
    )
}