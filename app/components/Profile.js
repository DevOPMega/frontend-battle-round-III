import Image from "next/image";
import Link from "next/link";
export default function Profile() {
    return (
        <>
            <div className="bg-zinc-950 border border-slate-700 rounded-xl">
                <div>
                    {/* <Image src={} alt={} /> */}
                </div>
                <div className="flex justify-center mt-8">
                    <div className="w-16 h-16 bg-white rounded-full overflow-hidden">

                    </div>
                </div>
                <div className="flex flex-col gap-1 text-center mt-8">
                    <Link href="#">
                        <h2 className="text-lg font-semibold hover:underline hover:text-violet-500">Adesh Singh</h2>
                    </Link>
                    <p className="text-xs font-light">
                        Frontend Developer | ReactJS | NextJS | NodeJS
                    </p>
                </div>
                <div className="flex flex-col mt-8 text-sm font-light">
                    <div className="flex flex-col py-4  border-t-2 border-slate-700">
                        <Link href="#">
                            <div className="flex justify-between py-1 px-4 hover:bg-violet-500">
                                <span>Profile Viewers</span>
                                <span>196</span>
                            </div>
                        </Link>
                        <Link href="#">
                            <div className="flex justify-between py-1 px-4 hover:bg-violet-500">
                                <span>Post Impressions</span>
                                <span>2349</span>
                            </div>
                        </Link>
                    </div>
                    <div className="py-4 px-4 border-t-2 border-slate-700 hover:bg-violet-500">
                        <Link href="#">
                            <p className="text-xs">Go professionaly with premium</p>
                            <p className="">Try 1 month for $0</p>
                        </Link>
                    </div>
                    <div className="py-4 px-4 border-t-2 border-slate-700 hover:bg-violet-500">
                        <Link href="#">
                            Saved Items
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}