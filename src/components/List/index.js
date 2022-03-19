import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { remove, edit, cancel } from '../../store/postSlice'

function List() {
  const list = useSelector((state) => state.posts)
  const filter = useSelector((state) => state.filter)
  const dispatch = useDispatch()

  const handleEdit = (id) => {
    dispatch(edit(id))
  }

  const handleRemove = (id) => {
    dispatch(remove(id))
    dispatch(cancel())
  }

  return (
   <>
     {list.filter(item => item.name.includes(filter.text)).map(({id, name, count}) => (
       <div className="oneElem" key={id}>
         <div className="title">{name}</div>
         <div className="count">{count}</div>
         <div className="buttons">
           <button onClick={() => handleRemove(id)}>Remove</button>
           <button onClick={() => handleEdit(id)}>Edit</button>
         </div>
       </div>
     ))}
   </>
  )
}

export default List;