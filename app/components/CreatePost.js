

export default function CreatePost() {
    return (
        <>
            <div className="px-4 pt-4 pb-2 bg-zinc-950 border border-slate-700 rounded-xl">
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4 pl-4">
                        <div className="">
                            <div className="w-12 h-12 bg-white rounded-full overflow-hidden">

                            </div>
                        </div>

                        <div className="basis-5/6">
                            <input
                                className="w-full px-4 py-3 text-sm outline-none bg-zinc-800 rounded-3xl"
                                type="text"
                                placeholder="Start a post, try writing with AI"
                            />
                        </div>
                    </div>
                    <div className="flex justify-between px-2 lg:px-6">
                        <div className="flex items-center gap-2 p-2 cursor-pointer hover:opacity-80">
                            <span className="material-symbols-outlined text-violet-500">
                                save
                            </span>
                            <span className="text-sm">Media</span>
                        </div>
                        <div className="flex items-center gap-2 p-2 cursor-pointer hover:opacity-80">
                            <span className="material-symbols-outlined text-violet-500">
                                calendar_month
                            </span>
                            <span className="text-sm">Event</span>
                        </div>
                        <div className="flex items-center gap-2 p-2 cursor-pointer hover:opacity-80">
                            <span className="material-symbols-outlined text-violet-500">
                                edit_note
                            </span>
                            <span className="text-sm">Write Article</span>
                        </div>



                    </div>
                </div>

            </div>
        </>
    )
}