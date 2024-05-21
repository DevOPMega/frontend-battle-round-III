import Link from "next/link";

export default function Navlinks() {
    return (
        <div className="flex justify-between gap-4 px-4">
            <div className="px-2 lg:w-20">
                <Link
                    href={`/`}
                >
                    <div className="flex flex-col items-center  hover:text-violet-500">
                        <span className="material-symbols-outlined scale-110">
                            home
                        </span>
                        <span className="hidden text-sm lg:block">Home</span>
                    </div>
                </Link>
            </div>
            <div className="px-2 lg:w-20">
                <Link href={`/mynetworks`}>
                    <div className="flex flex-col items-center  hover:text-violet-500">
                        <span className="material-symbols-outlined scale-110">
                            group
                        </span>
                        <span className="hidden text-sm lg:block">Network</span>
                    </div>
                </Link>
            </div>
            <div className="px-2 lg:w-20 ">
                <Link href={`#`}>
                    <div className="flex flex-col items-center  hover:text-violet-500">
                        <span className="material-symbols-outlined scale-110">
                            work
                        </span>
                        <span className="hidden text-sm lg:block">Jobs</span>
                    </div>
                </Link>
            </div>
            <div className="px-2 lg:w-20 ">
                <Link href={`#`}>
                    <div className="flex flex-col items-center  hover:text-violet-500">
                        <span className="material-symbols-outlined scale-110">
                            chat
                        </span>
                        <span className="hidden text-sm lg:block">Messaging</span>
                    </div>
                </Link>
            </div>
            <div className="px-2 lg:w-20 ">
                <Link href={`#`}>
                    <div className="flex flex-col items-center  hover:text-violet-500">
                        <span className="material-symbols-outlined scale-110">
                            notifications
                        </span>
                        <span className="hidden text-sm lg:block">Notification</span>
                    </div>
                </Link>
            </div>
            <div className="px-2 lg:w-20 ">
                <Link href={`#`}>
                    <div className="flex flex-col items-center  hover:text-violet-500">
                        <span class="material-symbols-outlined">
                            account_circle
                        </span>
                        <span className="hidden text-sm lg:block">Me</span>
                    </div>
                </Link>
            </div>

        </div>
    )
}