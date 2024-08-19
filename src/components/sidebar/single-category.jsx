export default function SingleCategory({category, category_icon, currentCategory, setCurrentCategory, id}) {
    
    return (
        <div className = {`flex-div ${id === currentCategory?"active":""}`} onClick = {() => setCurrentCategory(id)}>
            <img src = {category_icon} />
            <p>{category}</p>
        </div>
    )
}