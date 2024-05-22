
import Link from "next/link";

export default function Menubar({toggle}) {
    return (
        <div className={`flex-col py-2  ${toggle?"flex":"hidden"} lg:hidden`}>
            <Link className="px-8 py-2  hover:bg-violet-500" href="/">
                Home
            </Link>
            <Link className="px-8 py-2 hover:bg-violet-500" href="/mynetworks">
                My Networks
            </Link>
            <Link className="px-8 py-2 hover:bg-violet-500" href="/job-listing">
                Jobs
            </Link>
            <Link className="px-8 py-2 hover:bg-violet-500" href="/notification">
                Notifications
            </Link>
            <Link className="px-8 py-2 hover:bg-violet-500" href="/messaging">
                Messaging
            </Link>
            <Link className="px-8 py-2 hover:bg-violet-500" href="/user-profile">
                Profile
            </Link>
        </div>
    )

}