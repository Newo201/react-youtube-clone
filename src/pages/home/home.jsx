import Feed from "../../components/feed/feed";
import Sidebar from "../../components/sidebar/sidebar";
import { useState, useEffect } from "react";

export default function Home({sidebar}) {

    const [currentCategory, setCurrentCategory] = useState(0)

    useEffect(() => {
        console.log(currentCategory)
    }, [currentCategory])
    
    return (
        <>
            <Sidebar sidebar={sidebar} category = {currentCategory} setCurrentCategory = {setCurrentCategory}/>
            <Feed sidebar = {sidebar} category = {currentCategory}/>
        </>

    )
}