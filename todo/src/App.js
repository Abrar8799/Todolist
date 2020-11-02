import React ,{useState} from 'react'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import Form from './comp/Form'
import './App.css'
import Todo from './comp/Todo'

function App() {
const [inputvalue, setinput] = useState();
const [updateinput, setupdate]= useState([]);

const inputfunction =(event)=> {
  setinput(event.target.value);
}

const updated=(event)=> {
  setupdate((oldvalue)=>{
    return [...oldvalue,inputvalue]
  })
}

const deleteitem=(id)=> {
  console.log('React');
  setupdate((oldvalue)=>{
    return oldvalue.filter((arraEle,index)=>{
      return index!==id
    })
  })
}

return (
<>
< div className="main-div">
  <div className='container'>

  <input type="text" placeholder="Enter the value please" value={inputvalue} onChange={inputfunction}/>
  <button type="submit" onClick={updated}>button</button>

<ol>
 {
  updateinput.map((item,index)=> {
  return <Todo text={item} 
  key={index} 
  id={index}
  onSelect={deleteitem}/>
  })}

</ol>
</div>
</ div>
</>
  )
}

export default App
