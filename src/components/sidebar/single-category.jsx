export default function SingleCategory({category, category_icon, setCurrentCategory, id}) {
    return (
        <div className = "flex-div" onClick = {() => setCurrentCategory(id)}>
            <img src = {category_icon} />
            <p>{category}</p>
        </div>
    )
}