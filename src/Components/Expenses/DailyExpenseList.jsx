const DailyExpenseList=(props)=>{
    return(
        <li>
            <span>{props.item.price}</span>
            <span>{props.item.description}</span>
            <span>{props.item.category}</span>
        </li>
    )
}
export default DailyExpenseList