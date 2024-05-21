import { posts } from "./dummypost"

export default function Posts() {
    return (
        <>
            {
                posts.map(post => {
                    return (
                        <div className="mt-8 px-4 py-6 bg-zinc-950 border border-slate-700 rounded-xl">
                            <div className="flex items-center gap-4 pl-4">
                                <div className="">
                                    <div className="w-12 h-12 bg-white rounded-full overflow-hidden">

                                    </div>
                                </div>
                                <div className="basis-5/6 flex flex-col text-sm">
                                    <div className="flex items-center gap-2">
                                        <h3 className="text-lg text-violet-400 font-semibold">{post.username}</h3>
                                        <button
                                            className="font-light text-gray-400"
                                        > : Following</button>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-200 font-extralight ">{post.work}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-200 font-extralight">{post.time}: Edited</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6 flex flex-col gap-2 px-4 text-sm font-normal">
                                {post.body.map(p => (
                                    <span>{p}</span>
                                ))}
                            </div>
                            <div className="flex justify-between mt-6 px-4 text-sm text-gray-400">
                                <span className="cursor-pointer ">Like by {post.likedby} and {post.other}</span>
                                <span className="cursor-pointer ">{post.comments} comments {post.reposts} reposts</span>
                            </div>
                            <div className="flex justify-between mt-2 pt-2 border-t border-gray-500">
                                <span class="material-symbols-outlined px-2 py-1 cursor-pointer text-violet-500">
                                    thumb_up
                                </span>
                                <span class="material-symbols-outlined px-2 py-1 cursor-pointer text-violet-500">
                                    comment
                                </span>
                                <span class="material-symbols-outlined px-2 py-1 cursor-pointer text-violet-500">
                                    share
                                </span>
                            </div>
                        </div>
                    )
                })
            }

            <div className="mt-8 px-4 py-6 bg-zinc-950 border border-slate-700 rounded-xl">
                <div className="flex items-center gap-4 pl-4">
                    <div className="">
                        <div className="w-12 h-12 bg-white rounded-full overflow-hidden">

                        </div>
                    </div>
                    <div className="basis-5/6 flex flex-col text-sm">
                        <div className="flex gap-2">
                            <h3 className="text-violet-400 font-semibold">Madara Uchiha</h3>
                            <button
                                className="font-light text-gray-400"
                            > : Following</button>
                        </div>
                        <div>
                            <p className="text-xs text-gray-200 font-extralight ">Engineer @Google | Actor | WebD | AnimeAwardWinner</p>
                        </div>
                        <div>
                            <p className="text-xs text-gray-200 font-extralight">12m: Edited</p>
                        </div>
                    </div>
                </div>
                <div className="mt-6 flex flex-col gap-2 px-4 text-sm font-normal">
                    <span>Found something on the Internet related to the recent Pune accident.</span>
                    <span>Since morning, I have been reading posts about justice wrt to this incident.</span>
                    <span>"Kitna justice milega, kitna nahi, yeh toh waqt batayega..."</span>
                    <span>but the saddest part of the whole incident is that,</span>
                    <span>the loss of lives can't be reversed.</span>
                    <span>#linkedin #life #puneaccident #justice #itcommunity</span>
                </div>
                <div className="flex justify-between mt-6 px-4 text-sm text-gray-400">
                    <span className="cursor-pointer ">Like by Sasuke Uchiha</span>
                    <span className="cursor-pointer ">12 comments 3 reposts</span>
                </div>
                <div className="flex justify-between mt-2 pt-2 border-t border-gray-500">
                    <span class="material-symbols-outlined px-2 py-1 cursor-pointer text-violet-500">
                        thumb_up
                    </span>
                    <span class="material-symbols-outlined px-2 py-1 cursor-pointer text-violet-500">
                        comment
                    </span>
                    <span class="material-symbols-outlined px-2 py-1 cursor-pointer text-violet-500">
                        share
                    </span>
                </div>
            </div>
        </>
    )
}