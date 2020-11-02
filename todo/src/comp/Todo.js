import React from 'react'

 const Todo=(props)=> {

    return (
    <>
    <div>

    <li>{props.text}
    < button onClick={()=>{props.onSelect(props.id);
    }}>button</button>
    </li>

</div>
</>
    )
 }
export default Todo
