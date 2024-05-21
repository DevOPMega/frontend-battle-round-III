import { users } from "./dummy";

export default function Invitation() {
    return (
        <div className="bg-zinc-950 border border-slate-700 rounded-xl">
            <h2 className="p-4 text-lg">Invitation</h2>
            <div className="flex flex-col">
                {
                    users.map(user => (
                        <div className="flex items-center gap-4 p-4 border-t border-gray-500">
                            <div className="w-16 h-16 bg-white rounded-full overflow-hidden"></div>
                            <div className="w-full flex flex-col  lg:flex-row lg:items-center lg:justify-between">
                                <div>
                                    <h3 className="text-lg">{user.name}</h3>
                                    <p className="text-sm font-extralight">{user.work}</p>
                                </div>
                                <div className="flex gap-4">
                                    <button
                                        className="px-4 py-2 border-2 border-violet-500 rounded-3xl hover:opacity-80"
                                    >Ignore</button>
                                    <button
                                        className="px-4 py-2 bg-violet-500 rounded-3xl hover:opacity-80"
                                    >Accept</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
                
            </div>
        </div>
    )
}