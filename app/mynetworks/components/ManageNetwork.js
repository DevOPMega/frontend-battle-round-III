import Link from "next/link";

export default function ManageNetworks() {
    return (
        <div className="p-4 bg-zinc-950 border border-slate-700 rounded-xl">
            <h2 className="text-lg">Manage my network</h2>
            <div className="flex flex-col gap-4 mt-4">
                <Link href={`#`}>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-4">
                            <span className="material-symbols-outlined">
                                group
                            </span>
                            <span className="font-extralight">Connections</span>
                        </div>
                        <div className="">
                            <span className="font-extralight">1817</span>
                        </div>
                    </div>
                </Link>
                <Link href={`#`}>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-4">
                            <span className="material-symbols-outlined">
                                contacts
                            </span>
                            <span className="font-extralight">Contacts</span>
                        </div>
                        <div className="">
                            <span className="font-extralight">298</span>
                        </div>
                    </div>
                </Link>
                <Link href={`#`}>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-4">
                            <span className="material-symbols-outlined">
                                person
                            </span>
                            <span className="font-extralight">Following & Followers</span>
                        </div>
                        <div className="">
                            <span className="font-extralight">1056</span>
                        </div>
                    </div>
                </Link>
                <Link href={`#`}>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-4">
                            <span className="material-symbols-outlined">
                                groups
                            </span>
                            <span className="font-extralight">Groups</span>
                        </div>
                        <div className="">
                            <span className="font-extralight">19</span>
                        </div>
                    </div>
                </Link>
                <Link href={`#`}>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-4">
                            <span className="material-symbols-outlined">
                                event
                            </span>
                            <span className="font-extralight">Events</span>
                        </div>
                        <div className="">
                            <span className="font-extralight">1</span>
                        </div>
                    </div>
                </Link>
                <Link href={`#`}>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-4">
                            <span className="material-symbols-outlined">
                                pages
                            </span>
                            <span className="font-extralight">Pages</span>
                        </div>
                        <div className="">
                            <span className="font-extralight">26</span>
                        </div>
                    </div>
                </Link>
                <Link href={`#`}>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-4">
                            <span className="material-symbols-outlined">
                                newspaper
                            </span>
                            <span className="font-extralight">Newsletters</span>
                        </div>
                        <div className="">
                            <span className="font-extralight">78</span>
                        </div>
                    </div>
                </Link>

            </div>
        </div>
    )
}