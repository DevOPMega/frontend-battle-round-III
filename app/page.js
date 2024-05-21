import Profile from "./components/Profile";
import CreatePost from "./components/CreatePost";
import Posts from "./components/Posts";

export default function HomePage() {
  return (
    <>
      <div className="px-4 py-12 md:px-28">
        <div className="grid grid-cols-10 gap-4">
          {/* Left Block */}
          <div className="hidden col-span-2 lg:block">
            <Profile />
          </div>
          {/* Middle Block */}
          <div className="col-span-12 lg:col-span-5">
            <CreatePost />
            <Posts />
          </div>
          {/* Right Block */}
          <div className="hidden col-span-3 lg:block">

          </div>
        </div>
      </div>
    </>
  );
}
