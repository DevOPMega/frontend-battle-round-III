import Logo from "./Logo";
import Searchbar from "./Searchbar";
import Navlinks from "./Navlinks";

export default function Header() {
    return (
        <div className="px-4 py-2 bg-zinc-800 text-white border-b-4 border-violet-600 md:px-28">
            <div className="flex justify-between">
                <div className="flex items-center gap-4">
                    <Logo />
                    <Searchbar />
                </div>
                <div className="flex items-center gap-4">
                    <Navlinks />
                </div>
            </div>
        </div>
    );
}