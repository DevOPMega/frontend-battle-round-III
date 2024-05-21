import ManageNetworks from "./components/ManageNetwork"
import Invitation from "./components/Invitation"

export default function MyNetworks() {
    return (
        <>
        <div className="grid  gap-8 px-4 py-12 lg:px-28 lg:grid-rows-none lg:grid-cols-12">
            <div className="lg:col-span-3">
                <ManageNetworks />
            </div>
            <div className="lg:col-span-9">
                <Invitation />
            </div>
        </div>
        </>
    )
}