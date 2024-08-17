import Sidebar from "../components/sidebar/sidebar";

export default function Home({sidebar}) {
    return (
        <>
        {sidebar && <Sidebar/>}
        </>
    )
}