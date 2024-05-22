import { jobs } from "./dummy";

export default function JobListing() {
    return (
        <>
            <div className="mx-4 mt-6 lg:w-5/12 lg:mx-auto">
                <div className="p-4 bg-zinc-950 border border-slate-700 rounded-xl">
                    <h2 className="text-2xl">Top job picks for you</h2>
                    <p className="text-sm font-extralight">Based on your profile and search history</p>
                    {
                        jobs.map((job, i) => (
                            <div key={i} className="mt-6 flex flex-col">
                                <div className="flex gap-4 items-center py-4 border-b border-gray-500">
                                    <div className="w-16 h-16 bg-white">

                                    </div>
                                    <div>
                                        <h3 className="text-lg">{job.title}</h3>
                                        <p className="text-sm font-light">{job.company}</p>
                                        <p className="text-sm font-light">{job.location}</p>
                                        <button
                                            className="text-sm mt-2 px-4 py-1 bg-violet-500 rounded-3xl hover:opacity-80"
                                        >Easy Apply</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    <div className="mt-6 flex flex-col">
                        <div className="flex gap-4 items-center py-4 border-b border-gray-500">
                            <div className="w-16 h-16 bg-white">

                            </div>
                            <div>
                                <h3 className="text-lg">Frontend Developer</h3>
                                <p className="text-sm font-light">Kitecyber</p>
                                <p className="text-sm font-light">India (Remote)</p>
                                <button
                                    className="text-sm mt-2 px-4 py-1 bg-violet-500 rounded-3xl hover:opacity-80"
                                >Easy Apply</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}