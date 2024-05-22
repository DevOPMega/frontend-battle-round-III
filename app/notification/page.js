import Link from "next/link"
import { notifications } from "./dummy"

export default function Notification() {
    return (
        <>
            <div className="lg:w-7/12 lg:mx-auto lg:mt-6">
                <div className="flex justify-between p-4 bg-zinc-950 border border-slate-700 lg:rounded-xl">
                    <h2 className="text-xl font-semibold">Manage your notification</h2>
                    <Link className="text-violet-400" href="#">View Settings</Link>
                </div>
                <div className="flex gap-2 mt-4 p-4 bg-zinc-950 border border-slate-700 lg:rounded-xl">
                    <button
                        className="text-sm mt-2 px-4 py-2 bg-violet-500 rounded-3xl hover:opacity-80"
                    >All</button>
                    <button
                        className="text-sm mt-2 px-4 py-2 bg-violet-500 rounded-3xl hover:opacity-80"
                    >My posts</button>
                    <button
                        className="text-sm mt-2 px-4 py-2 bg-violet-500 rounded-3xl hover:opacity-80"
                    >Mentions</button>
                </div>

                <div className="flex flex-col gap-2 mt-4 p-4 bg-zinc-950 border border-slate-700 lg:rounded-xl">
                    {
                        notifications.map((notification, i) => (
                            <div key={i} className="flex gap-4  items-center py-1 ">
                                <div className="w-12 h-12 bg-white">

                                </div>
                                <div className="w-full flex justify-between">
                                    <p className="text-sm">
                                        {notification.message}
                                    </p>
                                    <span className="text-sm font-extralight">{notification.time}</span>
                                </div>
                                
                            </div>
                        ))
                    }                    
                </div>
            </div>
        </>
    )
}