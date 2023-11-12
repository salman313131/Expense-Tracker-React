const DailyExpenseList=(props)=>{
    return(
        <li>
            <span>{props.item.price}</span>
            <span>{props.item.description}</span>
            <span>{props.item.category}</span>
            <button onClick={props.onDelete}>Delete</button>
            <button onClick={props.onEdit}>Edit</button>
        </li>
    )
}
export default DailyExpenseList