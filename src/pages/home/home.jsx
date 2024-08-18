import Feed from "../../components/feed/feed";
import Sidebar from "../../components/sidebar/sidebar";

export default function Home({sidebar}) {
    return (
        <>
            <Sidebar sidebar={sidebar} />
            <Feed sidebar = {sidebar}/>
        </>

    )
}